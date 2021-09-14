import React, { useContext } from "react"
import {GlobalContext} from "../../Context/GlobalState"

export default function Balance (){
        const { transactions } = useContext(GlobalContext);
       const transactionAmount = transactions.map(transaction => transaction.amount);
       const balance = transactionAmount.reduce((acc, item) => ( acc += item), 0).toFixed(2);
    return <div>
        <h3>Current Balance</h3>
        <h1>$ {balance}</h1>
    </div>

}