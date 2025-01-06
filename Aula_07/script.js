function soma() {
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(document.getElementById("n2").value)
    let res = document.getElementById("resultado")

    // let num1 = parseInt(numero1.value)
    // let num2 = parseInt(numero2.value)


    let resultado = num1 + num2

    res.innerHTML = (`A soma de ${num1} + ${num2} é ${resultado}`)
    res.style.backgroundColor = "blue"
}





// numero1 = 30
// numero2 = 50
// resultado =  30 + 50 = 3050