/**
 * @jest-environment jsdom
 */

const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./index.html");
const { toggleDarkMode } = require("./../app.js");

describe(" toggle dark mode", () => {
    test("adding dark mode class", () => {
        toggleDarkMode();
        expect(window.document.body.className).toBe("dark-mode");
    });
});

/*
It is better to use testing frameworks like Cypress to confirm if
the CSS styles applied to an HTML element. It is not best practice
for a unit test to do so.
*/