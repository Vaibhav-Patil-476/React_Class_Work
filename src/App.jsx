import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Counter from './assets/Components/Counter'
import CrudOperation from './assets/Components/CrudOperation'
import GetInputValue2 from './assets/Components/GetInputValueUsingObject'
import GetInputValue from './assets/Components/GetInputValue'
import Header from './assets/Components/Header'
import AdminLogin from './assets/Components/admin/AdminLogin';
import AdminDashboard from './assets/Components/admin/AdminDashboard';
import Sidebar from './assets/Components/Sidebar';
import AddProduct from './assets/Components/admin/AddProduct';
import Products from './assets/Components/admin/Products'
import Contact from './assets/Components/Contact'
import AdvanceValidation from './assets/Components/AdvanceValidation';
import CompA from './components/LazyLoading/CompA';
import CompB from './components/LazyLoading/CompB';

import { lazy, Suspense } from 'react';
import Loading from './components/LazyLoading/Loading';

const CompC = lazy(() => import('./components/LazyLoading/CompC'))



function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/counter' element={<Counter/>}/>
    <Route path="/crudopretion" element={<CrudOperation/>}/>
    <Route path='/getinputvalueusingobject' element={<GetInputValue2/>}/>
    <Route path='/getinputvalue' element={<GetInputValue/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/advancevalidation' element={<AdvanceValidation/>}/>
    <Route path='/advancevalidation' element={<AdvanceValidation/>}/>



     <Route path={"/adminlogin"} element={<AdminLogin/>}/>
            <Route path={"/admin"} element={<Sidebar />} >
              <Route index element={<AdminDashboard />} />
              <Route path={"/admin/addproduct"} element={<AddProduct />} />
              <Route path={"/admin/products"} element={<Products />} />
            </Route>
   </Routes>

   </BrowserRouter>
  )
}

export default App