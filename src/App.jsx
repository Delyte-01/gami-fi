import { useEffect, useState } from 'react'

// import './App.css'
import Lenis from 'lenis'
import '../src/index.css'
import Loader from './Components/Loader';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store';
import News from './Pages/News';
import NewsDetails from './Components/News/NewsDetails';
import StoreDetails from './Components/Store/StoreDetails';
import Cart from './Components/Store/Cart';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Career from './Pages/Career';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Error from './Pages/Error';

function App() {
  const [loading, setLoading] = useState(false);
  
  // useEffect(()=>{
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);
  //   },5000)
  // },[]);
  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

  return (
    <>
      <div>
        {
          loading ?(
            <Loader loading={loading} />
          ):(
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/store' element={<Store />}/>
              <Route path='/news' element={<News />}/>
              <Route path='/news-post/:title' element={<NewsDetails />}/>
              <Route path='/store-details/:id' element={<StoreDetails />}/>
              <Route  path='/contact' element={<Contact />}/>
              <Route  path='/team' element={<Team />}/>
              <Route path='/career' element={<Career />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/pricing' element={<Pricing />}/>
              <Route path='*' element={<Error />}/>
            </Routes>
          )
        }
        
      </div>
    </>
  )
}

export default App
