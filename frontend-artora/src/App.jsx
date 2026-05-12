import './App.css'
import { Route, Routes } from 'react-router'
import BaseLayout from './layout/BaseLayout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

function App() {
  const density = "compact";
  return (
    <>
      <Routes>
        <Route element={<BaseLayout />} > 
          <Route path="/" element={<HomePage density={density} />} />
          <Route path="/shop" element={<ShopPage/>} />
        </Route>
      </Routes>
    
    </>
  )
}

export default App
