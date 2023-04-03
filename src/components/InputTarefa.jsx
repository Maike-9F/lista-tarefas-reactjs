import React, { useContext, useState } from "react"
import { TarefaContext } from "../context/TarefaContext"
import style from './InputTarefa.module.css'
import {RiAddCircleFill} from 'react-icons/ri'

export default function InputTarefa(){
    
    const [inputTarefa, setinputTarefa] = useState('')
    
    const [tarefa, setTarefa] = useContext(TarefaContext)

    function adcValor(event){
     
        if(inputTarefa.length > 0){
            event.preventDefault()    

           setTarefa(inputTarefa)
           setinputTarefa('')
        }

    }

    return(
        <form className={style.form}>   
            <input className={style.inputTarefa} type="text" placeholder="Adicione uma nova tarefa" 
                onChange={e => setinputTarefa(e.target.value)}
                value={inputTarefa}
              
                required
            />

            <button 
                className={style.buttonCreate} 
                onClick={adcValor}>Criar <RiAddCircleFill /> 
            </button>

        </form>
    )
}