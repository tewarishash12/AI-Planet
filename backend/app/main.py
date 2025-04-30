from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import upload, question
from app.db.init_db import init_db

app = FastAPI(title="PDF Q&A App")

# CORS setup (adjust origins in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(question.router, prefix="/ask", tags=["Question"])

# Initialize database
init_db()

@app.get("/")
def root():
    return {"message": "PDF Q&A Backend is running."}
