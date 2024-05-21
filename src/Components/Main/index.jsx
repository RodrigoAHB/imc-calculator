import { useEffect, useState } from "react";

const Main = ({imc}) => {
    const [answer, setAnswer] = useState('');
    let imcNumber = parseFloat(imc)
    useEffect(()=> {
        showImc()
    }, [imc])

    const showImc = () => {
            if(imcNumber < 18.5){
                setAnswer(`Abaixo do peso - IMC = ${imcNumber}`)
            } else if (imcNumber >= 18.5 && imcNumber < 25){
                setAnswer(`Peso normal - IMC = ${imcNumber}`)
            } else if (imcNumber >= 25 && imcNumber < 30){
                setAnswer(`Sobrepeso - IMC = ${imcNumber}`)
            } else if (imcNumber >= 30 && imcNumber < 35){
                setAnswer(`Obesidade grau I - IMC = ${imcNumber}`)
            } else if (imcNumber >= 35 && imcNumber < 40){
                setAnswer(`Obesidade grau II - IMC = ${imcNumber}`)
            } else if (imcNumber >= 40){
                setAnswer(`Obesidade grau III - IMC = ${imcNumber}`)
            } else {
                setAnswer(`Erro ao calcular IMC, digite altura ou peso novamente`)
            }
    }

    return (
        <h3>{answer}</h3>
    )
}

export default Main