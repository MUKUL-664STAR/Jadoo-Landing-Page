import './App.css'
import Navbar from './Components/Navbar'
import Introduction from './Pages/Introduction'
import Category from './Pages/Category'
import Selling from './Pages/Selling'
import Book from './Pages/Book'
import People from './Pages/People'
import Marquee from './Pages/Marquee'
import SubscriptionForm from './Pages/SubscriptionForm'
import Footer from './Components/Footer'
function App() {


  return (
    <>
    <div>
     <Navbar/>
     <Introduction/>
     <Category/>
     <Selling/>
     <Book/>
     <People/>
     <Marquee/>
     <SubscriptionForm/>
     <Footer/>
    </div>
    </>
  )
}

export default App
