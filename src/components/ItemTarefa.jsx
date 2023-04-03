import React from "react"
import style from './ItemTarefa.module.css'
import { MdDelete } from "react-icons/md"

export default function ItemTarefa(props) {

    function alterarTarefaConcluida() {

        props.concluido(props.tarefa.id)
    }

    function excluirTarefa() {

        props.excluir(props.tarefa.id)
    }

    function estiloTexto(){

        if(props.tarefa.concluido){
            return {textDecorationLine: 'line-through'}
        } else{
            return {textDecorationLine: 'none'}
        }
    }

    return (
        <div className={style.tarefa}>
            <input type="checkbox" className={style.checkBox} checked={props.tarefa.concluido} onChange={alterarTarefaConcluida} />
            <label style={estiloTexto()}>{props.tarefa.desc}</label>
            <div className={style.trashIcon}>
                <MdDelete onClick={excluirTarefa}/>
            </div>
            
        </div>
    )
}