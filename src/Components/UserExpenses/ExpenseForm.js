import "./ExpenseForm.css"
import { useState } from "react"
export default function ExpenseForm(props){

    const [inputTitle, setInputTitle] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    function inputTitleHandler(event){
        setInputTitle(event.target.value)
    }
    function inputAmountHandler(event){
        setInputAmount(event.target.value)
    }
    function inputDateHandler(event){
        setInputDate(event.target.value)
    }

    function FormSubmitHandler(event){
        event.preventDefault();
        const expenseData = {
            name : inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveExpenseData(expenseData);
        // alert(expenseData.title + " expense added")
        setInputTitle('')
        setInputAmount('')
        setInputDate('')
    }


    return(
        <form onSubmit={FormSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={inputTitle} onChange={inputTitleHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={inputAmount} onChange={inputAmountHandler} type="number"  step="0.05" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={inputDate} onChange={inputDateHandler} type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                
                <button onClick={props.onStopFormRendering} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )


    

    
}