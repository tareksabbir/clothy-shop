import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        <Route path="/" />
        <Route path="about" />
      </Routes>
    </div>
  );
}

export default App;
