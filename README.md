# 🏢 BuildCare AI

## AI 건축 문제 해결 도우미

BuildCare AI는 건축물에서 발생하는 균열, 누수, 결로, 곰팡이, 마감재 손상 등의 문제를 사용자가 입력하면 AI가 가능한 원인과 확인 사항, 대응 방법을 안내하는 웹 서비스입니다.

사용자가 건물 유형과 문제 유형, 구체적인 상황을 입력하면 Gemini API를 활용하여 건축물 문제에 대한 분석 결과를 제공합니다.

> 본 서비스의 AI 분석 결과는 초기 참고용 정보이며, 구조안전이나 전문적인 기술 판단을 대신하지 않습니다. 위험성이 있거나 정확한 판단이 필요한 경우 전문가의 현장 점검이 필요합니다.

---

# 1. 프로젝트 개요

## 서비스명

**BuildCare AI**

## 서비스 목적

건축물에서 균열이나 누수 등의 문제가 발생했을 때 일반 사용자는 원인을 파악하기 어렵습니다.

BuildCare AI는 사용자가 건축물의 기본 정보와 발생한 문제를 입력하면 AI가 내용을 분석하여 다음 정보를 이해하기 쉽게 제공합니다.

- 가능한 원인
- 확인해야 할 사항
- 권장 대응 방법
- 전문가 점검 필요 여부

이를 통해 건축물 문제 발생 시 사용자가 상황을 이해하고 다음 대응 방향을 판단하는 데 도움을 주는 것을 목적으로 합니다.

## 주요 대상 사용자

- 건축물 소유자
- 공동주택 거주자
- 건물 및 시설 관리자
- 건축물 하자에 대한 기본적인 정보가 필요한 일반 사용자

---

# 2. 주요 화면 구성

BuildCare AI는 하나의 웹페이지에서 다음 3개의 주요 섹션으로 구성되어 있습니다.

## ① HOME

서비스의 목적과 핵심 기능을 소개합니다.

사용자는 `AI 분석 시작하기` 버튼을 통해 AI 분석 영역으로 이동할 수 있습니다.

## ② AI 분석

사용자가 건축물 정보를 입력하고 Gemini AI 분석 결과를 확인하는 핵심 기능입니다.

입력 항목은 다음과 같습니다.

- 건물 유형
- 문제 유형
- 상황 설명

## ③ 서비스 소개

BuildCare AI의 서비스 목적, 주요 대상 사용자, 사용 기술 등을 안내합니다.

상단 Navigation 메뉴를 이용하여 HOME, AI 분석, 서비스 소개 영역으로 이동할 수 있습니다.

---

# 3. 핵심 AI 기능

## AI 입력 정보

사용자는 다음 정보를 입력합니다.

### 건물 유형

- 철근콘크리트
- 철골
- 조적
- 목조
- 기타

### 문제 유형

- 균열
- 누수
- 결로
- 곰팡이
- 마감재 손상
- 기타

### 상황 설명

사용자가 직접 건축물에서 발생한 현상을 입력합니다.

예시:

> 아파트 외벽 창문 주변에 세로 방향의 균열이 발생했고, 비가 오면 균열 주변이 젖습니다.

---

# 4. AI 분석 결과

사용자가 입력한 정보를 서버로 전달하면 Gemini API가 내용을 분석합니다.

AI는 다음 형식을 중심으로 결과를 생성합니다.

### 1. 가능한 원인

입력된 현상을 바탕으로 가능한 원인을 설명합니다.

### 2. 확인해야 할 사항

문제의 원인을 구체적으로 판단하기 위해 추가로 확인해야 할 사항을 안내합니다.

### 3. 권장 대응

현재 상황에서 사용자가 취할 수 있는 기본적인 대응 방법을 제공합니다.

### 4. 전문가 점검 필요 여부

현장 전문가의 추가 확인이나 점검이 필요한 상황인지 안내합니다.

AI는 구조안전 여부를 확정적으로 판단하지 않고, 위험 가능성이 있는 경우 전문가의 현장 점검을 권장하도록 구성했습니다.

---

# 5. 예외 처리

사용자가 필수 정보를 입력하지 않은 상태에서 AI 분석을 요청하는 경우 분석 요청을 실행하지 않고 안내 메시지를 표시합니다.

예:

> 상황 설명을 입력해주세요.

또한 AI API 호출 과정에서 오류가 발생할 경우 사용자에게 분석 실패 안내 메시지를 표시하도록 구현했습니다.

이를 통해 다음과 같은 상황을 처리합니다.

- 필수 입력값 누락
- AI API 요청 실패
- 서버 오류

---

# 6. 반응형 웹 디자인

BuildCare AI는 PC뿐만 아니라 모바일 환경에서도 사용할 수 있도록 반응형 웹 디자인을 적용했습니다.

화면 크기에 따라 입력 영역과 AI 분석 결과 영역의 배치가 자동으로 변경됩니다.

PC에서는 입력 영역과 결과 영역이 좌우로 배치되고, 모바일에서는 화면 폭에 맞게 세로 방향으로 재배치됩니다.

---

# 7. 사용 기술

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

## Backend

- Python
- Vercel Serverless Functions
- FastAPI

## AI

- Google Gemini API
- Google Gen AI Python SDK

## Deployment

- GitHub
- Vercel

---

# 8. 프로젝트 구조

```text
buildcare-ai/
│
├── api/
│   └── index.py
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── images/
│
├── index.html
├── requirements.txt
├── pyproject.toml
├── vercel.json
├── .gitignore
└── README.md
```

### 주요 파일 역할

| 파일 | 역할 |
|---|---|
| `index.html` | 웹페이지 구조 및 콘텐츠 |
| `css/style.css` | 웹 디자인 및 반응형 화면 구성 |
| `js/app.js` | 사용자 입력 처리 및 Backend API 호출 |
| `api/index.py` | Gemini API 호출 및 AI 분석 처리 |
| `requirements.txt` | Python 패키지 의존성 |
| `pyproject.toml` | Python/Vercel 실행 설정 |
| `vercel.json` | Vercel 배포 및 라우팅 설정 |
| `.gitignore` | API Key 등 Git 제외 파일 설정 |

---

# 9. 동작 구조

BuildCare AI의 전체 동작 과정은 다음과 같습니다.

```text
사용자
  ↓
index.html
  ↓
JavaScript (app.js)
  ↓
fetch()
  ↓
Vercel Python Serverless Function
  ↓
Gemini API
  ↓
AI 분석 결과
  ↓
웹페이지 결과 영역 출력
```

API Key를 브라우저의 JavaScript 코드에서 직접 사용하지 않고 Backend에서 환경변수로 불러오는 방식으로 구성했습니다.

---

# 10. 로컬 실행 방법

## 1) 저장소 Clone

```bash
git clone https://github.com/sukwonji77-svg/buildcare-ai.git
```

프로젝트 폴더로 이동합니다.

```bash
cd buildcare-ai
```

## 2) Vercel CLI 설치

Node.js가 설치되어 있는 환경에서 다음 명령을 실행합니다.

```bash
npm install -g vercel
```

Windows PowerShell 환경에서 실행 정책 등의 문제로 `npm` 명령이 실행되지 않을 경우 다음과 같이 실행할 수 있습니다.

```bash
npm.cmd install -g vercel
```

## 3) 환경변수 설정

Gemini API Key를 환경변수로 설정합니다.

환경변수 이름:

```text
GEMINI_API_KEY
```

API Key는 GitHub 저장소에 업로드하지 않습니다.

## 4) 개발 서버 실행

```bash
vercel dev
```

Windows 환경에서는 다음 명령을 사용할 수 있습니다.

```bash
vercel.cmd dev
```

실행 후 브라우저에서 로컬 개발 서버에 접속합니다.

```text
http://localhost:3000
```

---

# 11. 환경변수 및 API Key 보안

Gemini API Key는 소스 코드에 직접 작성하지 않고 환경변수로 관리합니다.

환경변수 이름:

```text
GEMINI_API_KEY
```

Vercel 배포 환경에서도 Project의 Environment Variables에 `GEMINI_API_KEY`를 등록하여 사용합니다.

`.env`와 같은 로컬 환경변수 파일은 `.gitignore`에 포함하여 GitHub에 업로드되지 않도록 관리합니다.

### 주의

API Key는 다음 위치에 공개하지 않습니다.

- GitHub 코드
- README
- 스크린샷
- HTML
- JavaScript
- 공개 문서

API Key가 외부에 노출된 것으로 의심되는 경우 기존 Key를 폐기하고 새로운 Key를 발급해야 합니다.

---

# 12. 배포

BuildCare AI는 GitHub 저장소와 Vercel을 연결하여 배포했습니다.

## GitHub Repository

https://github.com/sukwonji77-svg/buildcare-ai

## Vercel Production

https://buildcare-ai.vercel.app

GitHub의 `main` 브랜치에 변경사항을 Push하면 Vercel과 연결된 프로젝트에 변경사항을 반영할 수 있습니다.

---

# 13. 테스트 예시

## 입력

**건물 유형**

철근콘크리트

**문제 유형**

균열

**상황 설명**

> 아파트 외벽 창문 주변에 세로 방향의 균열이 발생했고, 비가 오면 균열 주변이 젖습니다.

## 출력

Gemini AI가 입력 내용을 분석하여 다음 항목을 중심으로 결과를 제공합니다.

1. 가능한 원인
2. 확인해야 할 사항
3. 권장 대응
4. 전문가 점검 필요 여부

---

# 14. 개발 과정에서의 AI 활용

본 프로젝트는 AI 코딩 도구를 활용하여 웹 서비스의 구조 설계, 코드 작성, 오류 분석 및 디버깅을 진행했습니다.

AI를 활용한 주요 작업은 다음과 같습니다.

- 서비스 아이디어 구체화
- HTML 페이지 구조 설계
- CSS 반응형 UI 작성
- JavaScript 입력 검증 및 API 통신 구현
- Python Serverless Function 구현
- Gemini API 연동
- Vercel 배포 오류 분석
- Python 패키지 및 실행환경 오류 해결
- 입력값 예외처리 UX 개선
- GitHub 및 Vercel 배포 과정 점검

특히 개발 과정에서 발생한 Python Serverless Function 오류, 패키지 의존성 문제, API 모델 호출 오류 등을 로그를 확인하면서 수정하고 재배포하는 방식으로 디버깅했습니다.

---

# 15. 구현 및 테스트 결과

최종적으로 다음 기능의 동작을 확인했습니다.

- HOME 화면 정상 표시
- Navigation 정상 동작
- AI 분석 입력 UI 정상 동작
- Gemini API 호출 정상 동작
- AI 분석 결과 출력 정상 동작
- 필수 입력값 누락 예외처리
- PC 화면 정상 표시
- 모바일 반응형 화면 정상 표시
- GitHub Repository 연결
- Vercel Production 배포 완료

---

# 16. 과제 증빙 자료

프로젝트 개발 및 테스트 과정에서 다음 증빙 자료를 작성했습니다.

| 번호 | 증빙 파일명 | 내용 |
|---|---|---|
| 01 | `증빙01_AI분석_정상작동.png` | Gemini AI 분석 기능 정상 실행 |
| 02 | `증빙02_모바일_반응형_AI분석.png` | 모바일 화면 반응형 UI 확인 |
| 03 | `증빙03_PC_HOME.png` | PC 환경 HOME 화면 |
| 05 | `증빙05_입력오류_예외처리.png` | 필수 입력값 누락 예외처리 |
| 06 | `증빙06_VSCode_프로젝트구조.png` | Frontend/Backend 프로젝트 구조 |
| 07 | `증빙07_GitHub_저장소.png` | GitHub Repository 및 Commit 확인 |
| 08 | `증빙08_Vercel_배포완료.png` | Vercel Production 배포 확인 |
| 09 | `증빙09_AI코딩도구_활용.png` | AI 코딩 도구를 활용한 개발 및 디버깅 과정 |

※ 증빙 04는 별도 파일로 구성하지 않았으며, 서비스의 3개 주요 섹션과 Navigation 구성은 웹 서비스 및 다른 화면 증빙을 통해 확인할 수 있습니다.

---

# 17. 향후 개선 방향

현재 버전은 텍스트 기반 건축물 문제 분석 기능을 중심으로 구현했습니다.

향후에는 다음과 같은 기능으로 확장할 수 있습니다.

- 건축물 균열 및 하자 사진 업로드
- 이미지 기반 AI 분석
- 분석 결과 저장
- 이전 분석 결과 조회
- 건축물별 유지관리 이력 관리
- 하자 유형별 데이터 축적
- 사용자 피드백 기능

---

# 18. 개발 결과

BuildCare AI 프로젝트를 통해 HTML, CSS, JavaScript 기반 Frontend와 Python 기반 Backend를 연결하고, 외부 AI API를 실제 웹 서비스에 적용했습니다.

또한 GitHub를 통한 소스 코드 관리와 Vercel Serverless Function 및 환경변수를 활용하여 API Key를 Frontend에 노출하지 않고 웹 서비스를 배포했습니다.

최종적으로 PC와 모바일 환경에서 사용할 수 있는 반응형 AI 웹 서비스를 구현하고 공개 URL을 통해 실행할 수 있도록 배포했습니다.