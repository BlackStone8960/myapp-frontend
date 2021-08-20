import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from '../components/Wrapper/Wrapper';
import LandingPage from '../components/LandingPage';
import Login from '../components/Login';
import Logout from '../components/Logout';
import RegisterAccount from '../components/RegisterAccount';
import ForgotPassword from '../components/ForgotPassword';

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path='/' component={LandingPage} exact={true} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/register' component={RegisterAccount} />
        <Route path='/forgot_password' component={ForgotPassword} />
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;