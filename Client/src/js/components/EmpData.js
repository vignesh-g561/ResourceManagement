var React = require('react');
var Link = require('react-router').Link;
var EmpData = React.createClass({

render:function(){
  var data = this.props.jData;
  var count=0;
  return(
    <div>
      <div className="row table table-responsive">
          <div className="col-sm-1">Emp No</div>
          <div className="col-sm-1">Emp Name</div>
          <div className="col-sm-1">Mentor</div>
          <div className="col-sm-1">Technology/Skills</div>
          <div className="col-sm-1">Digithon Cleared? (Y/N/NA)</div>
          <div className="col-sm-1">Digital Academy Complete? (Y/N/NA)</div>
          <div className="col-sm-1">Digital Academy Type</div>
          <div className="col-sm-1">Digital Academy Completion Date</div>
          <div className="col-sm-1">Agile Trainings Complete? (Y/N)</div>
          <div className="col-sm-1">BFSI Training Courses Complete? (Y/N)</div>
          <div className="col-sm-1">Skill Gap Trainings Complete? (Y/N)</div>
          <div className="col-sm-1">Skill Gap</div>
      </div>
    {
      data.map(function(d){
        return(
          <div className="row table table-responsive">
            <div className="col-sm-1"><Link to={"/"+d['Emp No']}>{d['Emp No']}</Link></div>
            <div className="col-sm-1">{d['Emp Name']}</div>
            <div className="col-sm-1">{d['Mentor']}</div>
            <div className="col-sm-1">{d['Technology/Skills']}</div>
            <div className="col-sm-1">{d['Digithon Cleared? (Y/N/NA)']}</div>
            <div className="col-sm-1">{d['Digital Academy Complete? (Y/N/NA)']}</div>
            <div className="col-sm-1">{d['Digital Academy Type']}</div>
            <div className="col-sm-1">{d['Digital Academy Completion Date']}</div>
            <div className="col-sm-1">{d['Agile Trainings Complete? (Y/N)']}</div>
            <div className="col-sm-1">{d['BFSI Training Courses Complete? (Y/N)']}</div>
            <div className="col-sm-1">{d['Skill Gap Trainings Complete? (Y/N)']}</div>
            <div className="col-sm-1">{d['Skill Gap']}</div>
          </div>
       );
      })
    }
    </div>
  );
}
});
module.exports = EmpData;
