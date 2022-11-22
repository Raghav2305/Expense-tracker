import { useState } from "react"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart"

export default function Expenses(props){

    const [filteredYear, setFilteredYear] = useState("2019")

    function handleFilterChange(inputYear){
        setFilteredYear(inputYear);
    }

    const filteredExpense = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onFilterChange={handleFilterChange} />   
    <ExpensesChart expenses={filteredExpense} /> 
    <ExpenseList list={filteredExpense} />
    </Card>   
    </div>
    );
};