import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoanDashboard from './loandashboard';
import LoanForm from './loanform';

function App() {
  return (
    <div className="App">
      <h1>Loan Management System</h1>
      <LoanForm />
      <LoanDashboard />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
