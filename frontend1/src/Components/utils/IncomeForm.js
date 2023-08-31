import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Data/globalContext';
import "./HandleInput.css"


function IncomeForm() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;
    const [userCategories, setUserCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    const defaultCategories = [
        "Salary", "Freelancing", "Investments", "Stocks","Bitcoin", "Bank", "Youtube"
    ];

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleAddCategory = (newCategory) => {
        setUserCategories([...userCategories, newCategory]);
        setNewCategory('');
    };

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    const categories = ["Salary", "Freelancing", "Investments", "Stocks","Bitcoin", "Bank", "Youtube"];

    function addCategory (newCat) {
        categories.push(newCat);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
            <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                >
                    <option value="" disabled>Select Option</option>
                    {defaultCategories.map((defaultCategory) => (
                        <option key={defaultCategory} value={defaultCategory}>
                            {defaultCategory}
                        </option>
                    ))}
                    {userCategories.map((userCategory) => (
                        <option key={userCategory} value={userCategory}>
                            {userCategory}
                        </option>
                    ))}
                </select>
            </div>
            <div className="categoryinput">
                <input
                    type="text"
                    value={newCategory}
                    placeholder="Add New Category"
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button onClick={() => handleAddCategory(newCategory)} className='new-category'>Add Category</button>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submi-btn">
                <button className="submit-btn">Submit</button>
            </div>
        </form>
    )
}

export default IncomeForm