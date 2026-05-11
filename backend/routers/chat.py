from fastapi import APIRouter
from pydantic import BaseModel
import uuid

from services.triage_service import (
    detect_ward,
    calculate_severity
)

router = APIRouter()

class ChatRequest(BaseModel):
    symptoms: str

@router.post("/")
async def triage(req: ChatRequest):

    ward = detect_ward(req.symptoms)

    severity = calculate_severity(req.symptoms)

    token = str(uuid.uuid4())[:8].upper()

    if ward == "Emergency Ward":
        message = (
            "⚠️ You are being routed immediately "
            "to Emergency Ward."
        )

    elif ward == "Mental Health Ward":
        message = (
            "💙 You are being routed to our "
            "Mental Health specialists."
        )

    else:
        message = (
            "✅ You are assigned to General Ward."
        )

    return {
        "success": True,
        "ward": ward,
        "severity": severity,
        "token": token,
        "message": message
    }