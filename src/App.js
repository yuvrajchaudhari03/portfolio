import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './containers/home';;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
