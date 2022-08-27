import { useSelector } from 'react-redux'

function Viewer() {

  const count = useSelector((state: any) => state.counter.value)

  return (
      <div className="App">
        <span>{count}</span>
      </div>
  )
}

export default Viewer
