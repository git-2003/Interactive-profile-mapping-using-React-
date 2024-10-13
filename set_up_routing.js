import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ProfileList} />
          <Route path="/profile/:id" component={ProfileDetails} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
