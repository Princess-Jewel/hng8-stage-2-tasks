import React from 'react';
import './App.css';
import { useAlert } from 'react-alert'
import { Home, About, Contact,} from './pages';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  const alert = useAlert()
  return (<div>
    <center>
    <button className=" h3 mt-4 p-3"
    onClick={() => {
      alert.show('My Name Is Princess Jewel Jel-Edema!')
    }}
  >
    Hi, Click Me!
  </button>
    </center>

    <div id="page-container">
    <Nav />
        
        <div id="content-wrap">
          
          <Home />
            

        
          </div>
        <Footer />
    </div>
  </div>
  );
}

export default App;
