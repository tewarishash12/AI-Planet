import os
from fastapi import UploadFile
from app.core.config import settings
from app.core.utils import ensure_dir_exists

def save_file(file: UploadFile, file_id: str) -> str:
    """Save uploaded file to the local filesystem."""
    ensure_dir_exists(settings.UPLOAD_FOLDER)

    file_extension = os.path.splitext(file.filename)[-1]
    saved_filename = f"{file_id}{file_extension}"
    saved_path = os.path.join(settings.UPLOAD_FOLDER, saved_filename)

    with open(saved_path, "wb") as out_file:
        content = file.file.read()
        out_file.write(content)

    return saved_path
