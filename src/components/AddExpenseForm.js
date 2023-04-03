import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [tag, setTag] = useState('');

    const onSubmit = (event)=> {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
            tag: tag,

        };
        dispatch ({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };

    return(
        <form onSubmit={onSubmit}>
            <div className= 'row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event)=> setName(event.target.value)}
                        ></input>
                </div>
                <div className= 'col-sm'>
                    <label for="cost">Cost</label>
                    <input 
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event)=> setCost(event.target.value)}
                    ></input>
                </div>
                <div className= 'col-sm'>
                    <label for="tag">Tag</label>
                    <select 
                        required='required'
                        type='text'
                        className='form-control'
                        id='tag'
                        value={tag}
                        onChange={(event)=> setTag(event.target.value)}
                    >
                        <option value="choose" disabled selected="selected">
                            -- Select expense tag --
                        </option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Home">Home</option>
                        <option value="School">School</option>
                        <option value="Food">Food</option>
                    </select>
                </div>
                <div className= 'col-sm'>
                    <button type = 'submit' className='btn btn-primary'>
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
