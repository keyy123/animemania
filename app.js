const nextBtns = document.querySelectorAll(".next-btn");
const allInputs = document.querySelectorAll("input[type='text']")

let input, secondInput, num;
nextBtns.forEach((btn) => {
    btn.setAttribute("type", "button");
    btn.addEventListener("click", () => {
        num = 1;
        if (!(input && secondInput)) {
            showNextQuestion(num);
        } else {
            num++;
            showNextQuestion(num);
        }
    });
});


function showNextQuestion(number) {
    let inputText = document.querySelector(`.question-${number} input[type='text']`);
    if (inputText.value <= 5) {
        return;
    }

    input = document.querySelector(`.question-${number}`);
    secondInput = document.querySelector(`.question-${number + 1}`);
    console.log(input, secondInput, inputText);
    input.style = "display:none;";
    secondInput.style = "display:block;";
}

