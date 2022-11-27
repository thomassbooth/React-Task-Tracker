import './App.css';
import Header from './components/Header.js';
import React from 'react'

function App() {

  return (
    <div className="container">
      <Header />
    </div>
  );
}

//class based component
// We do need to import react so  
// class App extends React.Component {
//   render(){
//     return (
//       <Header />
//     )
//   }
// }

export default App;
