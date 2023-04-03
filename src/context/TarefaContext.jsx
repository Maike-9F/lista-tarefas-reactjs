import React, { createContext, useState } from "react";

export const TarefaContext = createContext()

export function TarefaProvider(props){

    const [Tarefa, setTarefa] = useState('')

    return(
        <TarefaContext.Provider value={[Tarefa, setTarefa]}>
            {props.children}
        </TarefaContext.Provider>
    )
}
