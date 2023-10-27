function Calcular(){

    let idadeCanina = prompt("Qual a idade do cachorrinho?");
    console.log(idadeCanina)
    let mostraResultado = document.querySelector('.mostra-resultado')


    let idadeFinal = (idadeCanina * 7);

    if (idadeFinal < 11){
        mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é uma criança de " + idadeFinal;
    }
        if(idadeFinal > 11 && idadeFinal <= 17 ){
            mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é um adolecente de " + idadeFinal;
        }
            if(idadeFinal > 17 && idadeFinal <= 29 ){
                mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é um jovem de " + idadeFinal;
            }
                if(idadeFinal > 29 && idadeFinal <= 59 ){
                    mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é um adulto de " + idadeFinal;
                }
                if(idadeFinal >=60  ){
                    mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é um idoso de " + idadeFinal;
                }
                
        
    //BRO ESTOU PERDIDO NÃO TA FAZENDO SOL, VOCÊ PODE ME AJUDAR A TERMINAR ESSA CALCULADORA PARA MEU FILHO??
    //POR FAVOR BRO TERMINE PARA MIM GANG GANG GANG 777 FERNANDX CLOATHING
}