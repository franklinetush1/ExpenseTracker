import React from 'react'
import { useGlobalContext } from '../Data/globalContext'
import PieChartDisp  from './pieChart'
import IncomePieChart from './IncomeChart'

function History() {
    const {transactionHistory} = useGlobalContext()
    
    const [...history] = transactionHistory()
    

    return (
        <div className="activity_container">
        <div className='activity'>
            <h3>Recent History</h3>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div className="history">
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>
                        
                        <p className = 'pa' style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                    </div>
                )
            })}
        </div>
        <div className="piecharts">
            <div className="piechart">
            <PieChartDisp/>
            </div>
            <div className="piechart">
            <IncomePieChart/>
            </div>
        </div>
        </div>
    )
};

export default History