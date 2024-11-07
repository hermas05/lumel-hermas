import React from 'react';
import Table from './components/Table';
import './App.css';
import initialData from './assets/data';



function App() {
  return (
    <div className="App">
      <h1>Table</h1>
      <Table data={initialData.rows} />
    </div>
  );
}

export default App;
