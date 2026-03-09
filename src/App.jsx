import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Counter from './assets/Components/Counter'
import CrudOperation from './assets/Components/CrudOperation'
import GetInputValue2 from './assets/Components/GetInputValueUsingObject'
import GetInputValue from './assets/Components/GetInputValue'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Counter/>}/>
    <Route path="/" element={<CrudOperation/>}/>
    <Route path='/' element={<GetInputValue2/>}/>
    <Route path='/' element={<GetInputValue/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App