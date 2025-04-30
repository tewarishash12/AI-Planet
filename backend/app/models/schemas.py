from pydantic import BaseModel
from typing import Optional
from datetime import datetime

# Request schema for uploading a PDF is handled directly by FastAPI (UploadFile), no need for extra model

class UploadResponse(BaseModel):
    id: str
    filename: str
    upload_time: datetime

class QuestionRequest(BaseModel):
    document_id: str
    question: str

class AnswerResponse(BaseModel):
    question: str
    answer: str
