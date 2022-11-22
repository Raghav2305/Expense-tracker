import Expenses from './Components/Expenses/Expense';
import NewExpense from './Components/UserExpenses/NewExpense';
import { useState } from 'react';

const INITIAL_EXPENSES = [{
  id : "1",
  name : "Car Insurance",
  amount: 290.4,
  date: new Date(2020, 10, 21)},

  {id : "2",
  name : "Fuel",
  amount: 200.4,
  date: new Date(2019, 1, 20)},

  {id : "3",
  name : "Groceries",
  amount:  500,
  date: new Date(2022,4,22)},

  {id : "4",
  name : "Netflix",
  amount: 199,
  date: new Date(2022, 7, 10)

}]

function App() {
  const [newExpense, setNewExpense] = useState(INITIAL_EXPENSES);

  function getExpenseDataHandler(expenseData){
    setNewExpense(prevExpenseData => {
      return [expenseData, ...prevExpenseData]
    })
  }

  return (
    <div>
    <NewExpense onGetExpense={getExpenseDataHandler} />
    <Expenses expense = {newExpense}></Expenses>
    </div>
  );
}

export default App;
