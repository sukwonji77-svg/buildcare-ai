import os

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from google import genai


app = FastAPI()


class AnalysisRequest(BaseModel):
    buildingType: str
    problemType: str
    description: str


@app.post("/api/analyze")
def analyze_building(data: AnalysisRequest):

    if not data.buildingType or not data.problemType or not data.description.strip():
        raise HTTPException(
            status_code=400,
            detail="필수 입력값이 누락되었습니다."
        )

    api_key = os.environ.get("GEMINI_API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY 환경 변수가 설정되지 않았습니다."
        )

    try:
        client = genai.Client(api_key=api_key)

        prompt = f"""
당신은 건축물 유지관리와 건축 하자에 대한 정보를
일반 사용자에게 이해하기 쉽게 설명하는 AI 도우미입니다.

아래 건축물 문제를 분석해주세요.

건물 유형:
{data.buildingType}

문제 유형:
{data.problemType}

상황 설명:
{data.description}

반드시 아래 형식으로 답변해주세요.

1. 가능한 원인
- 가능한 원인을 2~4개 설명

2. 확인해야 할 사항
- 사용자가 추가로 확인해야 할 사항

3. 권장 대응
- 현재 상황에서 취할 수 있는 기본적인 대응

4. 전문가 점검 필요 여부
- 전문가 확인이 필요한 상황인지 설명

주의사항:
- 확실하지 않은 내용을 단정하지 마세요.
- 구조안전 여부를 확정적으로 판단하지 마세요.
- 위험 가능성이 있다면 전문가의 현장 점검을 권장하세요.
- 일반 사용자가 이해하기 쉬운 한국어로 답변하세요.
"""

        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt
        )

        return {
            "result": response.text
        }

    except Exception as e:
        print("ERROR:", str(e))

        raise HTTPException(
            status_code=500,
            detail="AI 분석 중 서버 오류가 발생했습니다."
        )