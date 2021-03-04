import './App.css';

import {
   Route
} from "react-router-dom";
import React from 'react';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
   return (
      <div className='app-wrapper'>
         <Header/>
         <Navbar/>
         <div className='app-wrapper-content'>
            <Route path='/dialogs'
                   render={() => <DialogsContainer /*store={props.store}*/
                   />}/>
            <Route path='/Profile'
                   render={() => <Profile /*store={props.store}*//>}/>
            <Route path='/News' render={() => <News/>}/>
            <Route path='/Music' render={() => <Music/>}/>
            <Route path='/Settings' render={() => <Settings/>}/>
         </div>
      </div>
   )
}

export default App;
