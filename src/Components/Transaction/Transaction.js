import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../../Context/GlobalState';

export  const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? '+' : '-';
    const transactionType = transaction.amount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.desc}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="del_Button"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    )
}