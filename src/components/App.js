import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import streamList from './streams/streamList';
import streamCreate from './streams/streamCreate';
import streamDelete from './streams/streamDelete';
import streamEdit from './streams/streamEdit';
import streamShow from './streams/streamShow';
import NavBar from './Navbar';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={streamList} />
              <Route path="/streams/new" exact component={streamCreate} />
              <Route path="/streams/delete" exact component={streamDelete} />
              <Route path="/streams/edit" exact component={streamEdit} />
              <Route path="/streams/show" exact component={streamShow} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
