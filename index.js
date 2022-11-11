
//??? button.addEventListener('click', calcular) ???
function calcular(){
    const primeiroValor = document.getElementById("valor1")
    const secundoValor = document.getElementById("valor2")
    const operadores = document.getElementById("operador")
    const button = document.getElementById("calcular")
    const saidaResultado = document.getElementById("resultado")
    const op = operadores.value
    const v1 = parseFloat(primeiroValor.value)
    const v2 = parseFloat(secundoValor.value)

    if (op == "+" || op == "-"|| op == "*" || op == "/" ){
        let resultado;
        switch (op){
            case "+":
                resultado = v1 + v2
                break;
            case "-":
                resultado = v1 - v2
                break;
            case "*":
                resultado = v1 * v2 
                break;
            case "/":
                resultado = v1 / v2 
                break;
        }
        saidaResultado.innerHTML= resultado

    }else {
        console.log("Error!")
    } 
}
calcular()