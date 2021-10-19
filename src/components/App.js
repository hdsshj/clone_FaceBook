import React from 'react';
import './Style/App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sign from '../pages/Sign';
import PostList from '../pages/PostList';
import CommentList from './CommentList';
import SideBar from './SideBar';


function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Switch>
          <Route exact path="/sign">
            <Sign />
          </Route>
          <>
            <div className="app">
              <Header />
              <div className="app__body">
                <SideBar />
                <Switch>
                  <Route exact path="/">
                    <PostList />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        </Switch>
      </div>
    </>
  );
}

export default App;
