var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./components/Master');
var Home = require('./components/Home');
var HomePage = require('./components/Home');
var Profile = require('./components/Profile');
var Metrics = require('./components/Metrics');
module.exports = (
<Route>
  <Route handler={Master}>
      <DefaultRoute handler={Home} name="HomePage" />
  </Route>
  <Route handler={Home} name="Home" path="/Home"/>
  <Route handler={Metrics} name="Metrics" path="/Metrics"/>
  <Route handler={Profile} name="Profile" path="/:id"/>
</Route>
);
