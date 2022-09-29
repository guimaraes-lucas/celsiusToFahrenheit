function transformDegree(degree) {
    const celsiusExists = degree.includes('C')
    const fahrenheitExists = degree.includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }


    if (fahrenheitExists) {
        updatedDegree = Number(degree.replace("F", ""))
        formulaC = (fahrenheit) => (fahrenheit - 32) * 5/9
        degreeSign = 'C'
        console.log(formulaC)
    }
    

    if (celsiusExists) {
        updatedDegree = Number(degree.replace("C", ""))
        formulaF = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
        console.log(formulaF)
    }

}

console.log(transformDegree('50C'))
console.log(transformDegree('10F'))