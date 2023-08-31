import React from 'react'
import "./Dashboard.css"
import Chart  from './Chart.js'
import { useGlobalContext } from '../Data/globalContext'
import { useEffect } from 'react'

import { CategoryiconData } from '../Data/Data'

export const Dashboard = () => {
  const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    // Define a function to find the biggest amount expense
  const findBiggestExpense = (expenses) => {
    let biggestExpense = null;
    expenses.forEach((expense) => {
      if (!biggestExpense || expense.amount > biggestExpense.amount) {
        biggestExpense = expense;
      }
    });
    return biggestExpense
  };
  

  const biggestExpense = findBiggestExpense (expenses);

  return (    
    <div className='Dashboard'>
        <Chart/>        
        <div className="stats-container">
            <div className="monthexpense">
                <div className='secExp'>
                  <p>Total Income</p>
                  {totalIncome()}
                  </div>
                <div className='secExp1'>
                  <p>Total Expenses</p>
                  {totalExpenses()}</div>
            </div>
            <div className="biggest"> {biggestExpense && (
                  <div>
                    <p>Biggest Expense:</p>
                    <span>Title: {biggestExpense.title}</span>
                    <br/>
                    <br/>
                    <span>Amount: {biggestExpense.amount}</span>
                    <span>
                      {(CategoryiconData.map(element => {
                          if (element.category === biggestExpense.category){
                            return(
                            <element.icon/>
                            )     
                          } 
                          }))}
                    </span>                 
                  </div>
                )}
                
                              
            </div>
        </div>
        
    </div>
   
  )
}
