import { Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Route path='/' element={<h1>Inicio</h1>}/>
      <Route path='about' element={<h1>About</h1>}/>
      <Route path='new' element={<h1>New</h1>}/>
    </>
  )
}

export default App
