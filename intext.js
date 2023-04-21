var calculator = document.getElementById("main");
function foo(num) {
    calculator.value += num;

}
function equal() {

    try {
        calculator.value = eval(calculator.value);
    }
    catch (err) {
        alert("invalid")
    }

}
function kar() {
    calculator.value = "";
}
function del() {
    calculator.value = calculator.value.slice(0, -1);
}
