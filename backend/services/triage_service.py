EMERGENCY_KEYWORDS = [
    "chest pain",
    "heart attack",
    "stroke",
    "bleeding",
    "can't breathe",
    "breathing problem",
    "accident",
    "unconscious",
]

MENTAL_KEYWORDS = [
    "depression",
    "anxiety",
    "stress",
    "suicidal",
    "panic",
]

def calculate_severity(symptoms: str):

    score = 1

    text = symptoms.lower()

    for keyword in EMERGENCY_KEYWORDS:
        if keyword in text:
            score += 5

    for keyword in MENTAL_KEYWORDS:
        if keyword in text:
            score += 3

    return min(score, 10)


def detect_ward(symptoms: str):

    text = symptoms.lower()

    for keyword in EMERGENCY_KEYWORDS:
        if keyword in text:
            return "Emergency Ward"

    for keyword in MENTAL_KEYWORDS:
        if keyword in text:
            return "Mental Health Ward"

    return "General Ward"