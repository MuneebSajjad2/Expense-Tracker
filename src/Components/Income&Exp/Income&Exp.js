import React, {useContext} from "react";
import {GlobalContext} from "../../Context/GlobalState"


export default function IncomeEXP(){
    const { transactions } = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    const income = transactionAmount
          .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0).toFixed(2);

    const expence = transactionAmount
        .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0).toFixed(2);

    return <div className="income_exp_container">
        <div>
            <h4 className="income_section">Income</h4>
            <h5>${income}</h5>
        </div>
        <div className="middle_line">|</div>
        <div>
            <h4 className="exp_section">Expense</h4>
            <h5>${expence}</h5>
        </div>
    </div>
    
}