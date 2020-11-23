import React  from 'react';

import './App.css';
import Login from "./pages/Login";
import AppStore from "./globalStores/AppStore"
import Users from "./pages/Users";

function App() {
  return (
    <AppStore.Provider>
        <Login>
            <Users/>
        </Login>
    </AppStore.Provider>
  );
}

export default App;
