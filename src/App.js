import ModeContext from './ModeContext';
import { useState } from 'react';
import './App.css';
import ModeSwitcher from './ModeSwitcher';

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('mode')) === true ? true : false);
  const toggle = () => {
    const chosenMode = !isDark
    setIsDark(chosenMode)
    localStorage.setItem('mode', chosenMode)
  }
  return (
    <ModeContext.Provider value={{ isDark, toggle }}>
      <div className="App">
        <header className={`App-header${isDark ? '-dark' : ''}`}>
          <ModeSwitcher />
        </header>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
