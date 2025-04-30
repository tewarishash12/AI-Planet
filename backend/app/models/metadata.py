# app/models/metadata.py
from sqlalchemy import Column, String, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import uuid

Base = declarative_base()

class PDFMetadata(Base):
    __tablename__ = "pdf_metadata"

    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid.uuid4()))
    filename = Column(String, nullable=False)
    content = Column(Text, nullable=False)  # Added the content column
    upload_time = Column(DateTime, default=datetime.utcnow)
