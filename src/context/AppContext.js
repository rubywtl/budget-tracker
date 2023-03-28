import React, {createContext, useReducer} from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 0, 
    expenses: [
        { id: 12, name: 'Fish', cost: 0, tag: 'Food'},
        { id: 13, name: 'Tickets', cost: 0, tag: 'Recreation'},
        { id: 14, name: 'Gas', cost: 0, tag: 'Car'},
    ], 

};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >  
        {props.children}
    </AppContext.Provider>

    )
};