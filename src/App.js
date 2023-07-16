
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Hello world!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1>
//         Hello world2
//       </h1>
//     </div>
//   );
// }

import React from 'react';

const App = () => {
  const movePage = (page) => {
    window.location.href = page;
  };

  return (
    <div style={{ backgroundColor: '#c2c2d6' }}>
      <input
        type="button"
        className="button button1"
        value="Create new account"
        onClick={() => movePage('New_account')}
      />
      <input
        type="button"
        className="button button1"
        value="Log in"
        onClick={() => movePage('Login_try')}
      />
    </div>
  );
};



export default App;
