import Expenses from './Components/Expense';

function App() {

  const expense = [{
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
    amount: 500,
    date: new Date(2022,4,22)},

    {id : "4",
    name : "Netflix",
    amount: 199,
    date: new Date(2021, 7, 10)

  }]

  return (
    <div>
    <h2>Hello There!!</h2>
    <Expenses expense = {expense}></Expenses>
    </div>
  );
}

export default App;
