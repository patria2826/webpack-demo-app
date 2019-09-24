class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValueButton = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(str) {
        this.resultDiv.innerText = str;
    }

    onClick(callback) {
        this.addValueButton.addEventListener("click", callback)
    }
}