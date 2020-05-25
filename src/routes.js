import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {isAuthenticated} from './services/auth';

import Main from './pages/Main';
import Post from './pages/Post';
import Create from './pages/Create';
import Login from './pages/Login';
import PodCast from './pages/Podcast';
import Courses from './pages/Courses';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => 
      isAuthenticated() ? (
      <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )
    }
  />
);

export default function Routes(){
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/post' exact component={Post} />
            <Route path='/post/:id' component={Post} />
            <PrivateRoute path='/create' component={Create} />
            <PrivateRoute path='/podcasts' component={PodCast} />
            <PrivateRoute path='/courses' component={Courses} />
            <Route path='/login' component={Login} />
            <Route path='*' component={()=> <h1>Page Not Found</h1>} />
        </Switch>
      </BrowserRouter>
  )  
}