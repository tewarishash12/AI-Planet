import google.generativeai as genai
import os
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.chains.question_answering import load_qa_chain
from langchain.llms.base import LLM
from typing import Optional, List

# ----------- Gemini Custom LLM Wrapper -----------
class GeminiLLM(LLM):
    model: str = "models/gemini-1.5-pro-latest"  # ✅ Updated model name

    def __init__(self, model: str = "models/gemini-1.5-pro-latest"):
        super().__init__()
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("API key for Google Gemini is not set in the environment variables.")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel(model)

    @property
    def _llm_type(self) -> str:
        return "gemini"

    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception as e:
            raise ValueError(f"Error during Gemini model call: {str(e)}")

# ----------- Setup LLM and Embeddings -----------
llm = GeminiLLM()  # ✅ Now uses a valid, supported model
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

# ----------- QA Function -----------
def answer_question(document_text: str, question: str) -> str:
    splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunks = splitter.split_text(document_text)
    vectorstore = FAISS.from_texts(chunks, embedding=embeddings)
    docs = vectorstore.similarity_search(question)
    chain = load_qa_chain(llm, chain_type="stuff")
    result = chain.run(input_documents=docs, question=question)
    return result