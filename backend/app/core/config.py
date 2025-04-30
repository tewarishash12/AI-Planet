import os
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env

class Settings:
    PROJECT_NAME: str = "PDF Q&A API"
    API_VERSION: str = "v1"

    # File storage
    UPLOAD_FOLDER: str = os.getenv("UPLOAD_FOLDER", "uploads")

    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./pdf_metadata.db")

    # NLP provider (if you want to toggle between LangChain/LLamaIndex)
    NLP_ENGINE: str = os.getenv("NLP_ENGINE", "langchain")

settings = Settings()
