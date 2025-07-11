let display = document.getElementById("display");
function add(data) {
    display.textContent = display.textContent + data;
}
function calculate() {
    let input = display.textContent;
    input = input.replace(/\b0(\d+)/g, '$1');
    let output = eval(input);
    display.textContent = output;
}
function reset() {
    display.textContent = '';
}