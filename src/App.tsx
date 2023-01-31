import React from 'react';
import './App.scss';

import Sidebar from './containers/sidebar/sidebar';
import CardContainer from './containers/cardContainer/cardContainer';
import Footer from './components/footer/footer';
import Header from './containers/header/header';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardContainer />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
