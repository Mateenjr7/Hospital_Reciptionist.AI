import os
from anthropic import Anthropic

client = Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

SYSTEM_PROMPT = """
You are a professional hospital AI receptionist.

Rules:
- Be calm and professional
- Detect emergencies
- Never diagnose diseases
- Be concise
"""

async def ask_claude(user_message: str):

    response = client.messages.create(
        model="claude-3-5-haiku-latest",
        max_tokens=150,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": user_message
            }
        ]
    )

    return response.content[0].text