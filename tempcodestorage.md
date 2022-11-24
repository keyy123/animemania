### Header Snippet

<header>
        <!-- <h1>This is the header for the site</h1> -->
        <nav class="navbar">
            <span>
                <i class="fa-solid fa-lemon"></i>
            </span>
            <div class="upper-nav">
                <input type="search" name="anime" id="anime" />
                <button id="toggle-mode">
                    Mode
                </button>
            </div>
            <div class="lower-nav">
                Second Nav Bar
            </div>
        </nav>
    </header>

    ### Question snippets

    
    <!-- <main>
        <form>
            <div class="question-box">
                <div class="question-1">
                    <label for="genres">What genre of anime are you looking for?</label>
                    <div class="stuff">
                        <input required type="text" list="anime-genres" name="anime-genres" id="genres" />
                        <br />
                        <button type="button" class="next-btn">
                            &rarr;
                        </button>
                    </div>
                    <datalist class="autosuggest" id="anime-genres">
                        <option value="Action"></option>
                        <option value="Adventure"></option>
                        <option value="Horror"></option>
                        <option value="Slice of life"></option>
                        <option value="Comedy"></option>
                        <option value="Romance"></option>
                        <option value="Harem"></option>
                        <option value="Cooking"></option>
                        <option value="Fantasy"></option>
                        <option value="Isekai"></option>
                        <option value="Martial Arts"></option>
                        <option value="Revenge"></option>
                        <option value="Sci-Fi"></option>
                        <option value="Drama"></option>
                        <option value="Psychological"></option>
                    </datalist>
                </div>
                <div class="question-2" style="display: none;">
                    <label for="status">
                        What is the status of this anime?
                    </label>
                    <br />
                    <div class="stuff">
                        <input required type="text" list="anime-status" name="anime-status" id="status" />
                        <br />
                        <button class="next-btn">
                            &rarr;
                        </button>
                    </div>
                    <datalist class="autosuggest" id="anime-status">
                        <option value="Finished"></option>
                        <option value="Airing"></option>
                        <option value="Hiatus"></option>
                        <option value="Cancelled"></option>
                    </datalist>
                </div>
                <div class="question-3" style="display: none;">
                    <label for="name">
                        What is the name of this anime?
                    </label>
                    <br />
                    <div class="stuff">
                        <input required type="text" name="anime-name" id="name" />
                        <br />
                        <button class="next-btn">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </form>
    </main> 
-->

### Existing CSS

@supports (font-size-adjust: 1) {

    label,
    input {
        font-size-adjust: 0.5;
    }
}

/* :root {
    --color-text: black;
    --color-background: white;
    color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
    :root {
        --color-text: white;
        --color-background: black;
    }
} */



p {
    color: #000;

    @media screen and (prefers-color-scheme: dark) {
        color: #fff;
    }
}

*,
*::after,
*::before {
    box-sizing: border-box;
}


/* body {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    background-image: linear-gradient(to right, #fffbd5, #b20a2c); 
line-height: calc(1ex/0.32);
background-color: var(--bg-color);
}
*/
main {
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 50%;
    height: 20%;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    justify-content: center;
}


div.question-box {
    display: flex;
    flex-direction: column;
    /* background-color: white; */
    width: 50%;
    height: 20%;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* border-radius: 12px; */
    justify-content: center;
    align-items: center;
}

div.question-box [type='text']:invalid {
    outline: 2px solid red;
}

.question-box input[type*='text'] {
    border-style: none;
    border-bottom: 3px solid gray;
    width: 90%;
}

input:focus-visible {
    outline-style: none;
}


.next-btn {
    border-radius: 8px;
    border: 1px solid black;
    color: white;
    background-color: black;
}

.next-btn:hover {
    opacity: 0.8;
}

.stuff {
    display: flex;
}

/* Navbar */

.navbar {
    display: grid;
    grid-template-columns: 100px repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.navbar span {
    margin: auto 1em;
    grid-row: 1/1;
    grid-column: 1/2;
    z-index: 2;
    background-color: white;
    text-align: center;
    border-radius: 50%;
    height: 75%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.upper-nav {
    display: flex;
    list-style: none;
    column-gap: 2em;
    grid-row: 1/1;
    grid-column: 4/-1;
}

.lower-nav {
    grid-row: 2/2;
    grid-column: 1/span 4;
    background-color: white;
    ;
}

.invert {
    filter: invert(1) hue-rotate(180deg);
}

.dark-mode {
    background-color: black;
    color: white;
}

/* 
.navbar p:first-child {
    justify-self: flex-start;
}

.navbar p:last-child {
    justify-self: flex-end;
} */


body {
    color: var(--color-text);
    background-color: var(--color-background);
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* background-image: linear-gradient(to right, #fffbd5, #b20a2c); */
    line-height: calc(1ex/0.32);
    /* background-color: var(--bg-color); */

}

### html head 
<!-- <head>
    <meta charset="UTF-8">
    <meta name="color-scheme" content="dark light" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime Project</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="./app.js" defer></script>
    <script src="https://kit.fontawesome.com/156ba70308.js" crossorigin="anonymous"></script>
</head> -->

## JS Code

const nextBtns = document.querySelectorAll(".next-btn");
// const allInputs = document.querySelectorAll("input[type='text']")

// function thisDOMElement(string) {
//     let element = document.querySelector(string);
//     if (element === null) {
//         console.error(new Error("Not a valid HTML element"))
//     }
//     return element;
// }

// let input, secondInput, num;
// nextBtns.forEach((btn) => {
//     btn.setAttribute("type", "button");
//     btn.addEventListener("click", () => {
//         num = 1;
//         if (!(input && secondInput)) {
//             showNextQuestion(num);
//         } else {
//             num++;
//             showNextQuestion(num);
//         }
//     });
// });


// function showNextQuestion(number) {
//     // let inputText = document.querySelector(`.question-${number} input[type='text']`);
//     let inputText = thisDOMElement(`.question-${number} input[type='text']`);

//     if (inputText.value.length <= 5) {
//         console.log(inputText.value)
//         return;
//     }

//     input = thisDOMElement(`.question-${number}`);
//     secondInput = thisDOMElement(`.question-${number + 1}`);
//     // let nextQuestion = document.querySelector(`.question-${number + 2}`);
//     // console.log(input, secondInput);

//     if (secondInput) {
//         input.style = "display:none;";
//         secondInput.style = "display:block;";
//     }
// }

// nextBtns[2].addEventListener("click", () => {
//     thisDOMElement('div.question-box').style.display = "none";
//     thisDOMElement('main').textContent = "Loading..."
//     setTimeout(() => {
//         thisDOMElement('main').textContent = "Done!"
//     }, 3000);
// });


// let button = document.querySelector("#toggle-mode");
// button.onClick = () => {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }