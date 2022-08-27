import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, toZero } from '../../redux/actions/counter';

// import components
import Viewer from '../../components/Viewer';

function Home() {

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
      <div className="App">
        <button onClick={() => dispatch(toZero())}>zerar</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
      
        <Viewer />
      </div>
  )
}

export default Home
