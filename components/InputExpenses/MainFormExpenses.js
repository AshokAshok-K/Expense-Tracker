import React, {useState} from "react";
import FormExpenses from "./FormExpenses";
import './MainFormExpenses.css'


const MainFormExpenses = (props) => {

    const [isAddingExpense, setIsAddingExpense] = useState(false)

    const addingExpenseHandler = () => {
        setIsAddingExpense(true)
    }

    const removingExpenseHandler = () => {
        setIsAddingExpense(false)

    }
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const parsedExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(parsedExpenseData)
        setIsAddingExpense(false)
    }
    return(
        <div className="new-expense">
            {!isAddingExpense && 
                (<button onClick={addingExpenseHandler}>Add New Expense</button>)}
            {isAddingExpense && 
                (<FormExpenses 
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel = {removingExpenseHandler} 
                />)
            }
        </div>
    )
}

export default MainFormExpenses