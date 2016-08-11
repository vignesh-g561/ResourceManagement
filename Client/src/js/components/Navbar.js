var React = require('react');
var Link = require('react-router').Link;
var Navbar = React.createClass({
    render:function(){
        return (
          	<div>
              <div className="pHeader">
                <h1>Resource Management System</h1>
              </div>
              <div className="navBar">
                <nav className="navbar">
                  <ul className="nav navbar-nav">
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to="Metrics">Metrics</Link></li>
                  </ul>
                </nav>
              </div>
          	</div>
        );
    }
});

module.exports = Navbar;
