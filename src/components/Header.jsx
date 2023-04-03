import React from "react";
import style from './Header.module.css'
import { BsListColumnsReverse }  from 'react-icons/bs'

export default function Headers(){

    return(
        <header className={style.header}>
             <h1>LISTA DE TAREFAS <BsListColumnsReverse /> </h1>
        </header>
           
    )
}