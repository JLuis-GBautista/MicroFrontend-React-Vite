import { Route } from "react-router-dom"


function App() {

  return (
    <>
      <Route path='/store' element={<h1>Store</h1>}/>
      <Route path='/car' element={<h1>Car</h1>}/>
      <Route path='/pay' element={<h1>Pay</h1>}/>
    </>
  )
}

export default App
