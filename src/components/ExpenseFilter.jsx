import React from 'react'

const ExpenseFilter = ( itemFilter ) => {
  return (
    <select name="" id="" className="form-select mb-3" onChange={(e) => itemFilter.filterItem(e.target.value)}>
        <option value=""></option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="groceries">Groceries</option>
    </select>
  )
}
export default ExpenseFilter