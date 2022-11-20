const nextBtns = document.querySelectorAll(".next-btn");
const allInputs = document.querySelectorAll("input[type='text']")

function thisDOMElement(string) {
    let element = document.querySelector(string);
    if (element === null) {
        console.error(new Error("Not a valid HTML element"))
    }
    return element;
}

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
    // let inputText = document.querySelector(`.question-${number} input[type='text']`);
    let inputText = thisDOMElement(`.question-${number} input[type='text']`);

    if (inputText.value.length <= 5) {
        console.log(inputText.value)
        return;
    }

    input = thisDOMElement(`.question-${number}`);
    secondInput = thisDOMElement(`.question-${number + 1}`);
    // let nextQuestion = document.querySelector(`.question-${number + 2}`);
    // console.log(input, secondInput);

    if (secondInput) {
        input.style = "display:none;";
        secondInput.style = "display:block;";
    }
}

nextBtns[2].addEventListener("click", () => {
    thisDOMElement('div.question-box').style.display = "none";
    thisDOMElement('main').textContent = "Loading..."
    setTimeout(() => {
        thisDOMElement('main').textContent = "Done!"
    }, 3000);
});


let button = document.querySelector("#toggle-mode");
button.onClick = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
}