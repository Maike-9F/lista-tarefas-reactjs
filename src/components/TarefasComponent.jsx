import React from "react";
import InputTarefa from "./InputTarefa";
import ListaTarefas from "./ListaTarefas";
import { TarefaProvider } from "../context/TarefaContext";

export default function TarefasComponent() {

    return (
        <div>
            <TarefaProvider>
                <InputTarefa />
                <ListaTarefas />
            </TarefaProvider>

        </div>
    )
}