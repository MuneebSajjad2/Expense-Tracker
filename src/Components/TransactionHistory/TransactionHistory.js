import React, { useContext } from "react";
import {GlobalContext} from "../../Context/GlobalState"


export default function TransactionHistory (){

const { transactions, delTransaction } = useContext(GlobalContext)
// const { delTransaction } = useContext(GlobalContext)
// console.log(transactions);
const sign = transactions.amount > 0 ? "+" :  "-";
const transactionType = transactions > 0 ? "plus" : "minus";
    return <div>
        <h3>
            Transaction History
        </h3>
        <hr />
        <ul className="list">
            {transactions.map((transaction)=>{
                    return <li key={transaction.id} className={transactionType}>
                    <span>{transaction.desc}</span>
                    <span>${transaction.amount}</span>
                    <button className="del_Button" onClick={
                        ()=> delTransaction(transaction.id)
                    }>X</button>
                </li>
            })}
            
        </ul>
    </div>
}