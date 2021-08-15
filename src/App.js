import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/dashboard/Create'
import Demo from './components/dashboard/Demo'
import Listings from './components/listings/Listings'
import Signup from './components/account/Signup'
import Login from './components/account/Login'

function App() {
  return (
    <Router>
      <div className="m-auto bg-gray-800">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/listings" component={Listings} />
          <Route path="/create" component={Create} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Login} />
          <Route path="/group" component={Demo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
