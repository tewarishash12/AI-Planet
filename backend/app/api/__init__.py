from fastapi import APIRouter
from app.api import upload, question

api_router = APIRouter()

api_router.include_router(upload.router, prefix="/upload", tags=["Upload"])
api_router.include_router(question.router, prefix="/ask", tags=["Question Answering"])
