import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/state/counter/counterSlice';

const Counter = () => {

   const counter =  useSelector((state) => state.counter.value); 
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className="card-header bg-secondary p-4">
                <h1>Counter app</h1>
            </div>

            <div className="card-body">
                <h1>{counter}</h1>
                <div className='my-4'>
                    <button onClick={()=> dispatch(increment())} className='btn btn-success'>Increase</button>
                    <button onClick={()=> dispatch(decrement())} className='btn btn-danger mx-3'>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;