"use strict";
console.log("out check");
var input = document.getElementById("text");
input.placeholder = "입력";
window.addEventListener("keydown", function (event) {
    var _a;
    if (event.key === "Enter") {
        (_a = document.getElementById("btn")) === null || _a === void 0 ? void 0 : _a.click();
    }
});
function checkText(word, path) {
    var _a;
    console.log("check");
    if (((_a = input === null || input === void 0 ? void 0 : input.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === word) {
        window.location.href = path;
    }
    else {
        input.value = "";
        input.placeholder = "실패";
    }
    return false;
}
