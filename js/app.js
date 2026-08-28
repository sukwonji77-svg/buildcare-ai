const buildingType = document.getElementById("buildingType");
const problemType = document.getElementById("problemType");
const description = document.getElementById("description");

const analyzeButton = document.getElementById("analyzeButton");
const statusMessage = document.getElementById("statusMessage");
const resultContent = document.getElementById("resultContent");


analyzeButton.addEventListener("click", async () => {

    const building = buildingType.value;
    const problem = problemType.value;
    const detail = description.value.trim();


    if (!building) {
        statusMessage.textContent = "건물 유형을 선택해주세요.";
        return;
    }

    if (!problem) {
        statusMessage.textContent = "문제 유형을 선택해주세요.";
        return;
    }

    if (!detail) {
        statusMessage.textContent = "상황 설명을 입력해주세요.";
        return;
    }


    statusMessage.textContent = "AI가 건축물 문제를 분석하고 있습니다...";

    analyzeButton.disabled = true;
    analyzeButton.textContent = "분석 중...";


    resultContent.innerHTML = `
        <div class="empty-result">
            <p>
                AI가 분석 결과를 생성하고 있습니다.<br>
                잠시만 기다려주세요.
            </p>
        </div>
    `;


    try {

        const response = await fetch("/api/analyze", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                buildingType: building,
                problemType: problem,
                description: detail
            })
        });


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.error || "서버에서 오류가 발생했습니다."
            );
        }


        resultContent.textContent = data.result;

        statusMessage.textContent = "분석이 완료되었습니다.";


    } catch (error) {

        console.error("AI 분석 오류:", error);

        statusMessage.textContent =
            "AI 분석 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";

        resultContent.innerHTML = `
            <div class="empty-result">
                <p>
                    분석 결과를 불러오지 못했습니다.<br>
                    잠시 후 다시 시도해주세요.
                </p>
            </div>
        `;

    } finally {

        analyzeButton.disabled = false;
        analyzeButton.textContent = "AI 분석하기";

    }

});