import React from 'react';
import Home_page from './components/Home_page';
import Register_page from './components/Register_page';
import Login_page from './components/Login_page';
import Info_page from './components/Info_page';
import Routine_page from './components/Routine_page';
import User_dashboard from './components/User_dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={Home_page}/>
          <Route path="/loginpage" component={Login_page} />
          <Route path="/registerpage" component={Register_page} />
          <Route path="/infopage" component={Info_page}/>
          <Route path="/routinepage" component={Routine_page} />
          <Route path="/userdashboard" component={User_dashboard} />
        </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
