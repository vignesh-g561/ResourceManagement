var React = require('react');

var Profile = React.createClass({
  render : function(){
    console.log("Profile"+this.props.params.id);
    return (
      <div>
        <center><h1>Profile</h1></center>
        <h3>Profil Id: {this.props.params.id}</h3>
      </div>
    )
  }
});

module.exports = Profile;
