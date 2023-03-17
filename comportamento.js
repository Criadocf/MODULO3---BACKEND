
const a_antes_reajuste = window.document.getElementById('salario')
        

const a = window.document.getElementById('antes_reajuste')
const b = window.document.getElementById('percentual_aumento')
const c = window.document.getElementById('valor_aumento')
const d = window.document.getElementById('novo_salario')


function calcular(){

    const a_antes_reajuste_conversao = Number(a_antes_reajuste.value)

    //SALÁRIO ANTES DO AJUSTE
    a.innerText = `Salário antes do reajuste: R$ ${a_antes_reajuste_conversao.toFixed(2)}`

    //PERCENTUAL DE AUMENTO APLICADO
    if(a_antes_reajuste_conversao <= 280){
        b.innerText = 'Percentual de aumento aplicado: 20%'
    }
    else if(a_antes_reajuste_conversao > 280 && a_antes_reajuste_conversao <= 700){
        b.innerText = 'Percentual de aumento aplicado: 15%'
    }
    else if(a_antes_reajuste_conversao > 700 && a_antes_reajuste_conversao <= 1500){
        b.innerText = 'Percentual de aumento aplicado: 10%'
    }
    else if(a_antes_reajuste_conversao > 1500){
        b.innerText = 'Percentual de aumento aplicado: 5%'
    }

    //VALOR DO AUMENTO;
    if(a_antes_reajuste_conversao <= 280){
        c.innerText = `Valor do aumento: R$ ${(a_antes_reajuste_conversao*0.20).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 280 && a_antes_reajuste_conversao <= 700){
        c.innerText = `Valor do aumento: R$ ${(a_antes_reajuste_conversao*0.15).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 700 && a_antes_reajuste_conversao <= 1500){
        c.innerText = `Valor do aumento: R$ ${(a_antes_reajuste_conversao*0.10).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 1500){
        c.innerText = `Valor do aumento: R$ ${(a_antes_reajuste_conversao*0.05).toFixed(2)}`
    }

    //NOVO SALÁRIO APÓS O AUMENTO.
    if(a_antes_reajuste_conversao <= 280){
        d.innerText = `Novo salário após o aumento: R$ ${(a_antes_reajuste_conversao*1.20).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 280 && a_antes_reajuste_conversao <= 700){
        d.innerText = `Novo salário após o aumento: R$ ${(a_antes_reajuste_conversao*1.15).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 700 && a_antes_reajuste_conversao <= 1500){
        d.innerText = `Novo salário após o aumento: R$ ${(a_antes_reajuste_conversao*1.10).toFixed(2)}`
    }
    else if(a_antes_reajuste_conversao > 1500){
        d.innerText = `Novo salário após o aumento: R$ ${(a_antes_reajuste_conversao*1.05).toFixed(2)}`
    }

    
}