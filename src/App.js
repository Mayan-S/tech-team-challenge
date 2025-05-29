import React from 'react';
import './App.css';
import members from './members_details.json';

function App() {
return (
<div className="App">
  <header className="header">
    <h1>👷‍♂️ F!ROSH Orientation Committee 👷‍♀️</h1>
  </header>

  <div className="card-container">
    {members.map((member, index) => (
    <div className="card" key={index}>
      <img
        src={'/' + member.picture}
        alt={member.name}
        className="card-image"
      />

      <div className="card-content">
        <h2 className="card-name">{member.name}</h2>
        <p className="card-position">{member.position}</p>
      </div>
    </div>
    ))}
  </div>

  <footer className="footer">
    <p>© 2025 F!ROSH</p>
  </footer>
</div>
);
}

export default App;