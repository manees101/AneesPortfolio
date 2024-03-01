
import './App.scss'
import { About,Header,Skills,Work,Footer, Testimonial } from './containers'
import { Navbar } from './components'
function App() {


  return (
    <div className='app'>
     <Navbar/>
     <Header/>
     <About/>
     <Work/>
     <Skills/>
     {/* <Testimonial/> */}
    <Footer/>
    </div>
  )
}

export default App
