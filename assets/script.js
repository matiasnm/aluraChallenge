
let input = document.querySelector("#texarea-input");
let infoDiv = document.querySelector("#div-info");
let outputDiv = document.querySelector("#div-output");
let outputDivText = document.querySelector("#div-output-text");

function encrypt() {
    console.log("encrypt!");
    let text = input.value;
    let result = "";
    for (const char of text) {
        switch (char) {
            case "a":
                result += "ai";
                break;
            case "e":
                result += "enter";
                break;
            case "i":
                result += "imes";
                break;
            case "o":
                result += "ober";
                break;
            case "u":
                result += "ufat";
                break;
            default:
                result += char;
        }
    infoDiv.style.display = "none";
    outputDiv.style.display = "flex";
    outputDivText.innerHTML = result;
   }
}

function decrypt() {
    console.log("decrypt!");
    let text = input.value;
    let result = "";
    result = text.replaceAll("ai","a");
    result = result.replaceAll("enter", "e");
    result = result.replaceAll("imes", "i");
    result = result.replaceAll("ober", "o");
    result = result.replaceAll("ufat", "u");
    infoDiv.style.display = "none";
    outputDiv.style.display = "flex";
    outputDivText.innerHTML = result;
}

function copyText() {
    console.log("copy!");
    var copyText = outputDivText.innerText;
    navigator.clipboard.writeText(copyText);
}