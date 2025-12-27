import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import bgHome from './assets/images/home/bg-home.svg'

function App() {

  return (
    <>
      <div className='bg-home'
        style={{ backgroundImage: `url(${bgHome})` }}>
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default App
