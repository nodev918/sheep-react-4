import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar'

import React from 'react'

const mockUser = ['Jack','Athena','Kenny','Yale','Mr.1','Mr.2','Miss.1','Miss.2','Aaron','Smith','Dog','Cat','Elvin','Calvin','Musk','Max']
const mockUser2 = ['Jack','Athena','Kenny','Yale','Mr.1','Mr.2','Miss.1']

export const UserContext = React.createContext({
  users: []
})


const Routing = () => {
  return (
    <Home />
  )
}


function App() {

  return (
    <>
      <UserContext.Provider value={{ users: mockUser2 }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
