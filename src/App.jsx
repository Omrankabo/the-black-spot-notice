import Layout from './components/Layout'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Notfound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/note' element={<Notes/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Layout>        
  )
}

export default App
