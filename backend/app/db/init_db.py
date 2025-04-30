from app.db.database import engine
from app.models.metadata import Base

def init_db():
    """Creates database tables."""
    Base.metadata.create_all(bind=engine)
