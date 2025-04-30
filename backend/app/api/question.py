from fastapi import APIRouter, HTTPException, Depends
from app.models.schemas import QuestionRequest, AnswerResponse
from app.services import nlp_engine
from app.db.database import get_db
from app.models.metadata import PDFMetadata
from sqlalchemy.orm import Session

router = APIRouter()

@router.post("/", response_model=AnswerResponse, summary="Ask question about PDF")
async def ask_question(request: QuestionRequest, db: Session = Depends(get_db)):
    file = db.query(PDFMetadata).filter(PDFMetadata.id == request.document_id).first()
    if not file:
        raise HTTPException(status_code=404, detail="PDF not found.")

    try:
        answer = nlp_engine.answer_question(file.content, request.question)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"NLP processing failed: {str(e)}")

    return AnswerResponse(question=request.question, answer=answer)
