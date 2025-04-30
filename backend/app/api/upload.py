from fastapi import APIRouter, File, UploadFile, HTTPException, status, Depends
from app.services import pdf_extractor, storage
from app.models import metadata
from app.db.database import get_db  # This should now work
from sqlalchemy.orm import Session
import os
import uuid

router = APIRouter()

@router.post("/", summary="Upload PDF and extract content")
async def upload_pdf(file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed.")

    # Save file to local storage
    file_id = str(uuid.uuid4())
    saved_path = storage.save_file(file, file_id)

    # Extract text from PDF
    try:
        extracted_text = pdf_extractor.extract_text(saved_path)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to extract text: {str(e)}")

    # Save metadata to DB
    pdf_metadata = metadata.PDFMetadata(
        id=file_id,
        filename=file.filename,
        content=extracted_text
    )
    db.add(pdf_metadata)
    db.commit()
    db.refresh(pdf_metadata)

    return {
        "message": "File uploaded and content extracted successfully.",
        "file_id": file_id
    }
