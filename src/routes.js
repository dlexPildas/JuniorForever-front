import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main';
import Post from './pages/Post';
import Create from './pages/Create';

export default function Routes(){
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/home' exact component={Main} />
            <Route path='/post' exact component={Post} />
            <Route path='/post/:id' component={Post} />
            <Route path='/create' component={Create} />
        </Switch>
      </BrowserRouter>
  )  
}