import { useSelector, useDispatch } from 'react-redux';

export default function CounterRedux(){
    const { counter} = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter*{counter}</h1>
            <button onClick={() => dispatch({type: "INCREMENT",})}>+1</button>
            <button onClick={() => dispatch({type: "DECREMENT",})}>-1</button>
        </div>
    );
};
