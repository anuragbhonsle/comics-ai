import { jwtVerify, createRemoteJWKSet } from "jose";
import dotenv from "dotenv";
dotenv.config();

const JWKS = createRemoteJWKSet(new URL(process.env.JWKS_URL));

export async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Missing token",
      });
    }
    const token = authHeader.split(" ")[1];

    const { payload } = await jwtVerify(token, JWKS);

    req.user = payload;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}
