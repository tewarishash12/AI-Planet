import os
from datetime import datetime

def ensure_dir_exists(directory: str):
    if not os.path.exists(directory):
        os.makedirs(directory)

def get_timestamp() -> str:
    return datetime.utcnow().isoformat()
