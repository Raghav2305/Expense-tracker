import "./ExpenseFilter.css"
import newExpense from "../../App"

export default function ExpenseFilter(props){

    function handleDropDownChange(event){
        props.onFilterChange(event.target.value)
    }


    return (
        
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={handleDropDownChange}>
              {/* <option value='null'>Choose a Year</option> */}
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
}