import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul>
            {expenses.map((expense)=>(
                <ExpenseItem 
                    id={expense.id}
                    tag={expense.tag}
                    name={expense.name}
                    cost={expense.cost} />
            ))}
            
        </ul>
    );
};

export default ExpenseList;