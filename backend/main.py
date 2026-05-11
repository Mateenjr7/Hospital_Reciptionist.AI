"""
Hospital Receptionist AI Backend
FastAPI + Claude AI + Supabase
Production Ready Backend
"""

import os
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import uvicorn

from routers import chat, submit

# ─────────────────────────────────────────────────────────────
# Load environment variables
# ─────────────────────────────────────────────────────────────
load_dotenv()

# ─────────────────────────────────────────────────────────────
# Logging Configuration
# ─────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)

logger = logging.getLogger("hospital-ai")

# ─────────────────────────────────────────────────────────────
# Validate ENV Variables
# ─────────────────────────────────────────────────────────────
REQUIRED_ENV = [
    "ANTHROPIC_API_KEY",
    "SUPABASE_URL",
    "SUPABASE_KEY"
]

missing = [key for key in REQUIRED_ENV if not os.getenv(key)]

if missing:
    raise RuntimeError(
        f"❌ Missing environment variables: {', '.join(missing)}"
    )

# ─────────────────────────────────────────────────────────────
# Lifespan Events
# ─────────────────────────────────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("🚀 Starting Hospital Receptionist AI Backend")

    yield

    logger.info("🛑 Shutting down backend")

# ─────────────────────────────────────────────────────────────
# FastAPI App
# ─────────────────────────────────────────────────────────────
app = FastAPI(
    title="Hospital Receptionist AI",
    description="AI-powered hospital receptionist backend",
    version="2.0.0",
    lifespan=lifespan
)

# ─────────────────────────────────────────────────────────────
# CORS
# ─────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────────────────────
# Request Logging Middleware
# ─────────────────────────────────────────────────────────────
@app.middleware("http")
async def log_requests(request: Request, call_next):

    logger.info(f"{request.method} {request.url.path}")

    response = await call_next(request)

    logger.info(
        f"Completed {request.method} {request.url.path} "
        f"with status {response.status_code}"
    )

    return response

# ─────────────────────────────────────────────────────────────
# Global Exception Handler
# ─────────────────────────────────────────────────────────────
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):

    logger.error(f"Unhandled Error: {str(exc)}")

    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Internal server error"
        }
    )

# ─────────────────────────────────────────────────────────────
# Routers
# ─────────────────────────────────────────────────────────────
app.include_router(
    chat.router,
    prefix="/api/chat",
    tags=["Chat"]
)

app.include_router(
    submit.router,
    prefix="/api/patient",
    tags=["Patient"]
)

# ─────────────────────────────────────────────────────────────
# Root Route
# ─────────────────────────────────────────────────────────────
@app.get("/")
async def root():

    return {
        "success": True,
        "app": "Hospital Receptionist AI",
        "version": "2.0.0",
        "status": "running"
    }

# ─────────────────────────────────────────────────────────────
# Health Check
# ─────────────────────────────────────────────────────────────
@app.get("/health")
async def health():

    return {
        "success": True,
        "status": "healthy"
    }

# ─────────────────────────────────────────────────────────────
# Run Server
# ─────────────────────────────────────────────────────────────
if __name__ == "__main__":

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )