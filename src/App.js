import React from 'react';
import './App.css';
import Header from './Component/Section/Header/header';
import Footer from './Component/Section/Footer/footer';
import home_page_data from './home_page.json';
const HomePage = React.lazy(() => import('./Component/Page/Home/home'));

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage data={home_page_data} />
      <Footer /> 
    </div>
  );
}

export default App;
