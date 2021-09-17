import React from 'react';

import { DataProvider } from './context/DataContext';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <DataProvider>
      <div style={{ position: 'relative' }}>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
