from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def submit_patient(data: dict):

    print("PATIENT DATA:", data)

    return {
        "success": True,
        "message": "Patient saved successfully"
    }