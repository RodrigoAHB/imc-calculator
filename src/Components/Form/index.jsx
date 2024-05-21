import { useState } from "react";
import Main from '../Main'
import style from './Form.module.css'

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [calculated, setCalculated] = useState(false);
    const [isClean, setIsClean] = useState(true)

    const handleClick = () => {
        let formula = parseFloat(weight / (height * height)).toFixed(2);
        setImc(formula)
        setCalculated(true)
    }

    const hancleClean = () =>{
        setCalculated(false)
        setHeight(0)
        setWeight(0)
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.inputContainer}>
                    <label > Altura (m) </label>
                    <input type="number" max={3} min={0} onChange={e => setHeight(e.target.value)} value={height}/>
                    <label> Peso (kg) </label>
                    <input type="number" min={0} onChange={e => setWeight(e.target.value)} value={weight}/>
                </div>
                <div className={style.buttonContainer}>
                    <button type="submit" onClick={handleClick} className={style.btnCalculate}>Calcular</button>
                    <button type="button" onClick={hancleClean}>Limpar</button>
                </div>
            </div>
            <div className={style.container}>
                {calculated && (
                    <Main imc={imc}/>
                )}
            </div>
        </>
        
    )
}

export default Form;