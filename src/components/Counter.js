import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync } from '../actions/counterActions';

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch(increment());
    }

    const decrementCount = () => {
        dispatch(decrement());
    }

    const incrementCountAsync = () => {
        dispatch(incrementAsync());
    }

    const decrementCountAsync = () => {
        dispatch(decrementAsync())
    }

    return(
        <div>
            <span>Count: {count}</span>
            <br/>
            <button onClick={incrementCount}>Increment</button>
            <br/>
            <button onClick={decrementCount}>Decrement</button>
            <br/>
            <button onClick={incrementCountAsync}>Increment Async</button>
            <br/>
            <button onClick={decrementCountAsync}>Decrement Async</button>
        </div>
    )
}

export default Counter;
