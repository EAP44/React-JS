import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import { useState } from 'react';

const Counter = ({ count, increment, decrement }) => {

  const [amount,setamount] = useState(1)

  const handleI = () =>{
    increment(Number(amount))
  };
  const handled = () =>{
    decrement(Number(amount))
  };

  return(
    <div>
      <h2 className='text-light'>Count: {count}</h2>
      <input type ="text" className='form-control m-1' value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
      <button className='btn btn-dark m-1' onClick={handled}>Decrement</button>
      <button className='btn btn-dark m-1' onClick={handleI}>Increment</button>
    </div>
  );
};

// Connect React component to Redux store

const  ConnectedCounter = connect(
    (state) => ({ count: state.count }),
    { increment, decrement }
  )(Counter);
  export default ConnectedCounter;
  