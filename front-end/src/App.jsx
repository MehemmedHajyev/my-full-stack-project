
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
// import Home from './pages/home/Home'
import Router from './layout/router/Router'
import ScrollToTop from './layout/router/ScrollToTop'

function App() {

  return (
    <>
       <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Router /> 
      </Layout>
      </BrowserRouter>    
    </>
  )
}

export default App
