import { Route } from 'react-router-dom'

export function CustomErrorMicroClient1() {
  return (
    <>
      <Route path='/' element={<h1>La ruta inicio no esta disponible en este momento</h1>}/>
      <Route path='/about' element={<h1>La ruta about no esta disponible en este momento</h1>}/>
      <Route path='/new' element={<h1>La ruta new no esta disponible en este momento</h1>}/>
    </>
  )
}

export function CustomErrorMicroClient2() {
  return (
    <>
      <Route path='/store' element={<h1>La ruta store no esta disponible en este momento</h1>}/>
      <Route path='/car' element={<h1>La ruta car no esta disponible en este momento</h1>}/>
      <Route path='/pay' element={<h1>La ruta pay no esta disponible en este momento</h1>}/>
    </>
  )
}

