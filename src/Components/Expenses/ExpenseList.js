import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

export default function ExpenseList(props){
    if(props.list.length ===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    
    return(
        <ul className="expenses-list">
            {props.list.map(expenseData => 
                (<ExpenseItem key={expenseData.id} 
                name={expenseData.name} 
                amount={expenseData.amount} 
                date={expenseData.date} />
                )
                )};
        </ul>
    )
    
}