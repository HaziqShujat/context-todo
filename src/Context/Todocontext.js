import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo:'todo msg',
            completed:false,

        }
    ],
    addtodo:(todo)=>{},
    updatedtodo:(id, todo)=>{},
    deletetodo:(id)=>{},
    toggletodo:(id)=>{}
})

export const usetodo =()=>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider