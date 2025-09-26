import { useState } from 'react'
import Header from'./Header';
import MainArea from './MainArea';
import Footer from './Footer'
import './App.css'

function App() {
  const [ page, setPage ] = useState('/');

  function goToPage(eventOrPath) {
    const isEvent = !!eventOrPath.preventDefault;
    if(isEvent) {
      eventOrPath.preventDefault();
    }
    const page = isEvent ? event.target.pathname : eventOrPath;
    setPage(page);
  }

  return (
    <div className='page'>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header goToPage={goToPage}/>
      <main id="main">
      <MainArea page={page} goToPage={goToPage} />
      </main>
      <Footer/>
    </div>
  );
}

export default App
