import React from 'react'
import { iconData } from '../Data/Data'
import avatar from "../img/avatar.png"
import "./Dashsidebar.css"
import { Dashboard } from './Dashboard';
import Activity from './Activity';
import {IncomesDash} from './IncomesDash';
import { ExpenseDash } from './ExpensesDash';
import { useState } from 'react';
import ApexChart from './ApexChart';

export default function DashSidebar() {

    const [active, setActive] = useState(1);
    const displayData = () => {
        switch (active) {
          case 1:
            return <Dashboard />;
          case 2:
            return <Activity />;
          case 3:
            return <IncomesDash />;
          case 4:
            return <ExpenseDash />;
          case 5:
            return <ApexChart />;
          default:
            return <Dashboard />;
        };
    }

  return (
    <div className="App">        
    
       <div className='dashsidebar'>
            <div className='pop_up'>

            </div>

            <div className="frofilepic">
                <img src={avatar} alt="Avatar" className='profilepic' />
                <h5>Hello andrea</h5>
            </div>
            
            
            {
                iconData.map((item) => {                 

                    return (
                    <div className="dash-cont" key={item.id} 
                    onClick={() => setActive(item.id)}
                    >
                        <section><item.icon/></section>
                        <div className="element_name">{item.name}</div>
                    </div>
                
                    )            
            })

            }           

        </div>

        {displayData()}
    </div>
  )
}
