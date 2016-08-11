var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./components/Master');
var Home = require('./components/Home');
var Profile = require('./components/Profile');
module.exports = (
<Route>
  <Route handler={Master}>
      <DefaultRoute handler={Home} name="Home" />
  </Route>
  <Route handler={Profile} name="Profile" path="/:id"/>
</Route>
);
