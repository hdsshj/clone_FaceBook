import React from 'react';
import './Style/App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sign from '../pages/Sign';
import PostList from '../pages/PostList';
import SideBar from './SideBar';


function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Switch>
          <Route exact path="/sign" exact>
            <Sign />
          </Route>
          <>
            <div className="app">
              <Header />
              <div className="app__body">
                <SideBar />
              </div>
            </div>
              <Route exact path="/" exact>
                <PostList />
              </Route>
          </>
        </Switch>
      </div>
    </>
  );
}

export default App;
