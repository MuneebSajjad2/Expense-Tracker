import { useState,useRef } from "react";
import React, {useContext} from "react";
import {GlobalContext} from "../../Context/GlobalState";

export default function NewTransaction(){
    const { transactions } = useContext(GlobalContext)
    const { addtransaction } = useContext(GlobalContext)
    console.log(transactions);
    let des = useRef();
    let amt = useRef();
    let [newDes,setDes] = useState("")
    let [newAmount,setAmount] = useState("")
    function addnNewTransaction(evt){

            evt.preventDefault();
            let NewTransaction = {
                id:new Date().getTime(),
                desc:newDes ,
                amount:+newAmount
            }
            console.log(newAmount)
            console.log(NewTransaction);

            addtransaction(NewTransaction);
            des.current.value = "";
            amt.current.value = ""
        }

    return <div className="newTransaction_container">
        <h3>
            Add New Transaction
        </h3>
        <hr />
            <form onSubmit={addnNewTransaction}>
                <div>
                    <label>Discription</label><br/>
                    <input required placeholder="Enter Transaction Details" ref={des} onChange={((evt)=>{
                            setDes(evt.target.value);
                        

                    })} type="text" />
                </div>
                <div>
                    <label>Amount</label><br/>
                    <input required ref={amt} placeholder="Enter Amount in Dollars" onChange={((evt)=>{
                            setAmount (evt.target.value)
                            
                    })} type="number" />
                </div>
                <button className="add_Button">Add Transaction</button>
            </form>
        </div>
}