import './App.css'
import { Route, Routes } from 'react-router'
import BaseLayout from './layout/BaseLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<BaseLayout />} > 
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    
    </>
  )
}

export default App
