import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

const Landing = lazy(() => import('./Components/Landing'))
const Dashboard = lazy(() => import('./Components/Dashboard'))

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return  <div>
    <button onClick={() => {
      navigate('/');
    }}>Landing Page</button>

    <button onClick={() => {
      navigate('/Dashboard');
    }}>Dashboard</button>
  </div>
}

export default App
