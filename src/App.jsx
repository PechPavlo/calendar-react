import React from 'react';
import Header from './components/Header';
// import NewEvent from './components/NewEvent/NewEvent';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      {/* <span className="loading-ring" /> */}
      {/* <NewEvent /> */}
    </div>
  );
}

export default App;
