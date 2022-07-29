import React, { useState } from 'react';

import { useDispatch, useSelector} from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from './counterSlice';

function Counter() {

    const count = useSelector((state) => state.counter.count);
    const despatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const resetAll = () => {
        setAmount(0);
        despatch(reset());
    }

    return (
        <div>
            
            <h1>Counter Header</h1>
            <span style={{ fontWeight: "bold" }} > count: </span> <span>{count}</span> <br /><br />
            <input type="button" value="+" onClick={ () => despatch( increment() )} />
            <input type="button" value="-" onClick={ () => despatch( decrement() )} /> <br /><br />
            <input type="button" value="Reset All" onClick={ resetAll } /> <br /><br />
            <span style={{ fontWeight: "bold" }} >Enter Amount: </span><input type="number" value={amount} onChange={ e => setAmount( +e.target.value )} /> <br /><br />
            <input type="button" value="Increment By Amount" onClick={ () => despatch( incrementByAmount(amount) )} /> 
            <input type="button" value="Decrement By Amount" onClick={ () => despatch( decrementByAmount(amount) )} /> <br /><br />

        </div>
    )
}
export default Counter;