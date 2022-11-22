import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

export default function NewExpense(props){

    function SaveInputExpenseData(InputExpenseData){
        const expenseData = {
            ...InputExpenseData,
            id : Math.random().toString()
        };
        // console.log(expenseData)
        props.onGetExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {SaveInputExpenseData}  />
        </div>
    )
}