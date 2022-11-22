import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react";

export default function NewExpense(props){

    const [form, setForm] = useState(false)

    function SaveInputExpenseData(InputExpenseData){
        const expenseData = {
            ...InputExpenseData,
            id : Math.random().toString()
        };
        // console.log(expenseData)
        props.onGetExpense(expenseData);
        setForm(false);
    }

    function renderForm(event){
        setForm(true)
    }

    function stopFormRendering(){
        setForm(false);
    }

    return(
        <div className="new-expense">

        {form === true ? <ExpenseForm onStopFormRendering = {stopFormRendering} onSaveExpenseData = {SaveInputExpenseData}  /> : <button onClick={renderForm}>Add Expense</button>}
                
        
        </div>
    )
}