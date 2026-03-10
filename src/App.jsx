import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Counter from './assets/Components/Counter'
import CrudOperation from './assets/Components/CrudOperation'
import GetInputValue2 from './assets/Components/GetInputValueUsingObject'
import GetInputValue from './assets/Components/GetInputValue'
import Header from './assets/Components/Header'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/counter' element={<Counter/>}/>
    <Route path="/crudopretion" element={<CrudOperation/>}/>
    <Route path='/getinputvalueusingobject' element={<GetInputValue2/>}/>
    <Route path='/getinputvalue' element={<GetInputValue/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App