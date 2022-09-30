
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import House from './components/pages/House'
import Houses from './components/pages/Houses'
import Member from './components/pages/Member'
import gameOfThrones from './gameOfThrones'

export default function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/' element={<Houses houses={gameOfThrones} />} />
        <Route path='/houses/:id' element={<House houses={gameOfThrones}/>} />
        <Route path='/houses/:houseId/members/:memberId' element={<Member/>} />
        {/* <Route path='/' element={} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}