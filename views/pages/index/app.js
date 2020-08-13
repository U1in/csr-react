import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routers from '../../pages/index/router';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact key="/" path="/">
          <Redirect to="/index"/>
        </Route>
        {
          Routers.map(route => (
            <Route key={route.name} path={route.path} exact render={ () => {
              const Component = route.component;
              return (
                <Component />
              )
            }}/>
          ))
        }
      </Switch>
    )
  }
}

export default App;