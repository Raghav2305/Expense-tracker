import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

export default function ExpenseItem(props){

    const [name, setName] = useState(props.name);
    function clickHandler() {
        setName("Updated!!!!");
    }       

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
    }