import { useState } from 'react'

function App() {
  const {height, setHeight} = useState(0)
  const {weight, setWeight} = useState(0)

  return (
    <h1>Hello World!</h1>
  )
}

export default App