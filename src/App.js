import './App.css';

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import React from 'react';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return ( <BrowserRouter>
    <div className = 'app-wrapper'>
    <Header />
    <Navbar />
    <div className = 'app-wrapper-content'>
    <Route path = '/dialogs'
      render = {() => <Dialogs state={props.state.dialogsPage}
      />} />
    <Route path ='/Profile'
      render ={() => <Profile state={props.state.profilePage}
          dispatch={props.dispatch} />} />
    <Route path ='/News' render ={() => <News />}/>
    <Route path = '/Music' render ={() => <Music />}/>
    <Route path ='/Settings' render ={() => <Settings />}/>
    </div>
    </div>
    </BrowserRouter > )
}

export default App;
