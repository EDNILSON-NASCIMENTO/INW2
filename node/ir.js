//fazer uma funcao arrow que recebe um valor esse valor corresponde ao salario
//função retorna uma informação ao usuáreio baseado em critérios
//se o valor for menor ou igual a 1.500 retorna 0
//se o valor for maior que 1.500 e menor que 2.500 calcular 15% e retornar (valor * 0.15)
//se o valor for maior que 2500 calcular 25% e retornar (valor * 0.25)
//exibi na tela 
//no casos de isento a frase - Seu salario [valor], e você é ISENTO.
//nos outros casos 
//seu salario  [valor], o imposto é de [imposto] e seu salario final é [valor-imposto]



const calculaImposto = (salario) => {
    if(salario <= 1500){
        return 0;
    } else if(salario > 1500 && salario <= 2500){
        return salario * 0.15;
    } else{
        return salario * 0.25;
    }
}

let salario = 2499;

if(calculaImposto(salario) == 0){
    console.log(`Seu salario é ${salario}, e você é ISENTO`);
} else{
    console.log(`Seu salario é ${salario}, o imposto é de ${calculaImposto(salario)} e seu salario final é ${salario - calculaImposto(salario)}`)
}

