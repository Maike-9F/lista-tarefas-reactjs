import React, { useContext, useEffect, useState } from "react"
import { TarefaContext } from "../context/TarefaContext";
import { v1 as uuid } from 'uuid'
import ItemTarefa from "./ItemTarefa";
import style from "./ListaTarefas.module.css"
import {ImFilesEmpty} from 'react-icons/im'


export default function ListaTarefas(props) {

    const [tarefas, setTarefas] = useState([])

    const [tarefaContext, setTarefaContext] = useContext(TarefaContext)


    useEffect(() => {
        let dados = localStorage.getItem("lista-tarefas")

        if (dados !== null) {
            setTarefas(JSON.parse(dados))
        }

    }, [])

    useEffect(() => {

        localStorage.setItem("lista-tarefas", JSON.stringify(tarefas))
    }, [tarefas])

    useEffect(() => {

        if (tarefaContext != '') {
            setTarefas([...tarefas, { id: uuid(), desc: tarefaContext, concluido: false }])
            setTarefaContext('')
        }

    }, [tarefaContext])

    function alterarTarefaConcluida(id) {

        setTarefas(state => state.map(t => {
            if (t.id === id) {
                t.concluido = !t.concluido
                return t
            } else {
                return t
            }
        }))
    }

    function excluirTarefa(id) {

        let newTarefas = tarefas.filter(t => {
            if (t.id !== id) {
                return t
            }
        })

        setTarefas(newTarefas)
    }

    function calcularTotalTarefas() {

        let total = 0

        tarefas.forEach(t => {
            if (t.concluido) {
                total++
            }
        })

        return total
    }


    return (
        <div>
            <div className={style.dadosTarefas}>
                <div>Tarefas criadas <span>{tarefas.length}</span> </div>
                <div>Concluídas <span>{calcularTotalTarefas()} de {tarefas.length}</span></div>
            </div>

            {tarefas.length == 0 ? (
                <div className={style.semTarefas}>
                    <ImFilesEmpty className={style.iconEmpty}/>
                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )
                :
                (
                    <ul>
                        {tarefas.map(t => {
                            return (
                                <li key={t.id}>
                                    <ItemTarefa tarefa={t} concluido={alterarTarefaConcluida} excluir={excluirTarefa} />
                                </li>
                            )
                        })}
                    </ul>
                )

            }


        </div>
    )
}