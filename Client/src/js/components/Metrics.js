var React = require('react');
var Navbar=require('./Navbar');
var Metrics = React.createClass({
    render:function(){
        return (
          	<div>
            <Navbar />
            <center><h1>Metrics Page</h1></center>
          	</div>
        );
    }
});

module.exports = Metrics;
