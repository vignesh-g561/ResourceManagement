var React = require('react');
var Navbar=require('./Navbar');
var Profile = React.createClass({

  getInitialState:function(){
    return({eData:{}});
  },

  componentWillMount :function(){

             $.ajax({
                   url : "http://localhost:9090/employees/"+this.props.params.id,
                   dataType : 'json',
                   type : "GET",
                   cache : false,
                   success : function(data){
                     this.setState({eData:data})
                     //console.log(JSON.stringify(data));
                   }.bind(this),
                   error : function(xhr, status, err) {
                   console.error("http://localhost:9090/employees/"+this.props.params.id, status, err.toString());
                   }.bind(this)
                 });
  },

  render : function(){
    console.log("Profile"+this.props.params.id);
    return (
      <div>
        <Navbar />
        <center><h1>Profile</h1></center>
        <h3>{JSON.stringify(this.state.eData)}</h3>
      </div>
    )
  }
});

module.exports = Profile;
