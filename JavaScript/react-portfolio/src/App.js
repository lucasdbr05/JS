import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './componets/Layout'
import Home from './componets/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
