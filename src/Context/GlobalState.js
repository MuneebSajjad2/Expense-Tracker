import React, {createContext,useReducer} from "react";
import AppReducer from "./AppReducer"

const initialState = {
    transactions: [
        
    ]
}



export const GlobalContext = createContext(initialState);
export const GlobalProvider = (props) => {
const [state, dispatch] = useReducer(AppReducer,initialState);
function delTransaction(id){
    dispatch({
        type:"del_transaction",
        payload: id
    })
}
function addtransaction(NewTransaction){
    dispatch({
        type:"add_transaction",
        payload: NewTransaction
    })
}

return (
    <GlobalContext.Provider value={
        {
            transactions: state.transactions,
            delTransaction,
            addtransaction
        }
    }>
        {props.children}
    </GlobalContext.Provider>
)
 
}