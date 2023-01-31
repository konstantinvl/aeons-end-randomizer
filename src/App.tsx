import React, { useState } from 'react';
import './App.scss';

import Sidebar from './containers/sidebar/sidebar';
import CardContainer from './containers/cardContainer/cardContainer';
import Footer from './components/footer/footer';
import Header from './containers/header/header';

function App() {
  const [sidebarStatus, setSideBarStatus] = useState(false);
  return (
    <div className='App'>
      <Header onClick={() => setSideBarStatus(false)} />
      <CardContainer />
      <Footer />
      <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSideBarStatus} />
    </div>
  );
}

export default App;
