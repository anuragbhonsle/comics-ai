import { useEffect, useRef } from "react";

const RESOLUTION_SCALE = 0.5;
const TIME_OFFSET = 18;

function hexToRgb(hex) {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const num = parseInt(cleanHex, 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.6;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 res = max(u_resolution, vec2(1.0));
  vec2 uv = gl_FragCoord.xy / res.xy;
  float t = u_time * 0.18;

  float x = uv.x + 0.05 * sin(uv.y * 3.2 + t * 0.6);
  float a = fbm(vec2(x * 2.6, uv.y * 1.6 - t));
  float b = fbm(vec2(x * 5.3 + 4.2, uv.y * 2.9 - t * 1.5));
  float f = a * 0.72 + b * 0.34;
  float e = clamp(f * 2.4 - uv.y * 2.3, 0.0, 1.0);
  float alpha = 0.3 * smoothstep(0.06, 0.5, e) + 0.7 * smoothstep(0.5, 0.96, e);

  gl_FragColor = vec4(u_color * alpha, alpha);
}
`;

export default function FluidWave({ color = "#CC0E0E" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frameId;
    let resizeObserver;
    let gl;
    let program;
    let buffer;

    // Delay initialization by one frame to let DOM dimensions settle on reload
    const initId = requestAnimationFrame(() => {
      gl =
        canvas.getContext("webgl", { antialias: false, alpha: true }) ||
        canvas.getContext("experimental-webgl");

      if (!gl) return;

      const createShader = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };

      const vert = createShader(gl.VERTEX_SHADER, VERT);
      const frag = createShader(gl.FRAGMENT_SHADER, FRAG);
      program = gl.createProgram();

      gl.attachShader(program, vert);
      gl.attachShader(program, frag);
      gl.linkProgram(program);
      gl.useProgram(program);

      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );

      const aPos = gl.getAttribLocation(program, "a_pos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      const uRes = gl.getUniformLocation(program, "u_resolution");
      const uTime = gl.getUniformLocation(program, "u_time");
      const uColor = gl.getUniformLocation(program, "u_color");

      const rgb = hexToRgb(color);
      gl.uniform3f(uColor, rgb[0], rgb[1], rgb[2]);

      const startTime = performance.now();

      const updateDimensions = () => {
        const parent = canvas.parentElement;
        const width = parent?.clientWidth || window.innerWidth || 800;
        const height = parent?.clientHeight || 500;

        const w = Math.max(1, Math.round(width * RESOLUTION_SCALE));
        const h = Math.max(1, Math.round(height * RESOLUTION_SCALE));

        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
          gl.uniform2f(uRes, w, h);
        }
      };

      // Observe parent container size changes on window resize or page reload
      if (window.ResizeObserver && canvas.parentElement) {
        resizeObserver = new ResizeObserver(() => updateDimensions());
        resizeObserver.observe(canvas.parentElement);
      }

      const render = () => {
        updateDimensions();
        const elapsed = (performance.now() - startTime) / 1000;
        gl.uniform1f(uTime, TIME_OFFSET + elapsed);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        frameId = requestAnimationFrame(render);
      };

      render();
    });

    return () => {
      cancelAnimationFrame(initId);
      if (frameId) cancelAnimationFrame(frameId);
      if (resizeObserver) resizeObserver.disconnect();
      if (gl && program) {
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
      }
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
