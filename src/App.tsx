import React from 'react';
import TopBar from './components/TopBar'
const App: React.FC = () => {

  return (
    <div>
      <TopBar />
      <h1>Welcome to BAC-Archive !</h1>
    </div>
  );
};
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hey look at our baby, click on the button to celebrate while we are building the complete website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You celebrated {count} times.
        </button>
        <p>
          For contributors: Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
