import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

export default function Expenses(props){
    return(

    <div className="expenses">

    <ExpenseItem name = {props.expense[0].name} amount = {props.expense[0].amount} date = {props.expense[0].date}></ExpenseItem>

    <ExpenseItem name = {props.expense[1].name} amount = {props.expense[1].amount} date = {props.expense[1].date}></ExpenseItem>

    <ExpenseItem name = {props.expense[2].name} amount = {props.expense[2].amount} date = {props.expense[2].date}></ExpenseItem>

    <ExpenseItem name = {props.expense[3].name} amount = {props.expense[3].amount} date = {props.expense[3].date}></ExpenseItem>
    </div>
    
    )
}