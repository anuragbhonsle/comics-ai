import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import prisma from "./lib/prisma.js";
import crypto from "crypto";
import { authMiddleware } from "./middleware/authMiddleware.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is alive and running",
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/guest", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: message,
    });

    await prisma.chatHistory.create({
      data: {
        prompt: message,
        response: response.text,
        userId: `guest_${crypto.randomUUID()}`,
      },
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Full error:");
    console.dir(error, { depth: null });

    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/recommend", authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: message,
    });

    await prisma.chatHistory.create({
      data: {
        prompt: message,
        response: response.text,
        userId: userId,
      },
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Full error:");
    console.dir(error, { depth: null });

    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/userdata", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const userData = await prisma.chatHistory.findMany({
      where: {
        userId: userId,
      },
    });
    res.json(userData);
  } catch (error) {
    console.error("Full error:");
    console.dir(error, { depth: null });

    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required to join newsletter",
      });
    }

    const newContact = await prisma.contact.create({
      data: {
        email,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Successfully subscribed to the newsletter!",
      contact: newContact,
    });
  } catch (error) {
    console.error("Full error:");
    console.dir(error, { depth: null });

    if (error.code === "P2002") {
      return res.status(409).json({
        error: "This email is already subscribed.",
      });
    }

    return res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
