function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return ("Cannot divide by zero!")
    }
    return num1 / num2
}

function compair(num1, num2, oper) {
    switch (oper) {
        case 1:
            return num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`
        case 2:
            return num1 < num2 ? `${num1} is less than ${num2}` : `${num2} is less than ${num1}`
        case 3:
            return num1 === num2 ? `${num1} is equal to ${num2}` : `${num1} is not equal to ${num2}`
        default:
            return "Invalid operation!"
    }
}

function menuDriven() {

    let calculation = parseFloat(prompt("Choose Type:\n1. Arithmatic operations\n2. Comparision\n3. Exit"))

    switch (calculation) {
        case 1:
            var num1 = parseFloat(prompt("Enter first number:"))
            var num2 = parseFloat(prompt("Enter second number:"))
            let result

            let choice = parseFloat(prompt("Choose operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide"));
            switch (choice) {
                case 1:
                    result = add(num1, num2)
                    break;
                case 2:
                    result = subtract(num1, num2)
                    break;
                case 3:
                    result = multiply(num1, num2)
                    break;
                case 4:
                    result = divide(num1, num2)
                    break;
            }

            alert("Result: " + result)
            document.getElementById('result').innerHTML = 'Result : ' + result
            break;
        case 2:
            var num1 = parseFloat(prompt("Enter first number:"))
            var num2 = parseFloat(prompt("Enter second number:"))
            let operationChoice = parseInt(prompt("Choose operation:\n1. Greater Than\n2. Less Than\n3. Equal To"))

            let compairResult = compair(num1, num2, operationChoice)
            alert(compairResult)
            break;
        case 3:
            alert("Exiting calculator.")
            return
        default:
            alert("Invalid choice! Please choose again.")
            menuDriven()
    }

}
menuDriven()