import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sign from '../pages/Sign';
import PostList from '../pages/PostList';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#1877f2', height : '100vh' }}>
      <Switch>
        <Route exact path="/sign">
          <Sign />
        </Route>
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <PostList />
            </Route>
          </Switch>
        </>
        </Switch>
        </div>
    </>
  );
}

export default App;