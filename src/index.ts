console.log("out check");
let input = document.getElementById("text") as HTMLInputElement;
input.placeholder = "입력";

window.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        document.getElementById("btn")?.click();
    }
})

function checkText(word: string, path: string) {
    console.log("check");
    if (input?.value?.toLowerCase() === word) {
        window.location.href = path;
    } else {
        input.value = "";
        input.placeholder = "실패";
    }
    return false;
}