var React = require('react');
var Link = require('react-router').Link;

var EmployeeData = React.createClass({
render:function(){
  var data = this.props.jData;
  var count=1;
  return(
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th>Sl. No</th>
            <th>Emp No</th>
            <th>Emp Name</th>
            <th>Mentor</th>
            <th>Technology/Skills</th>
            <th>Digithon Cleared? (Y/N/NA)</th>
            <th>Digital Academy Complete? (Y/N/NA)</th>
            <th>Digital Academy Type</th>
            <th>Digital Academy Completion Date</th>
            <th>Agile Trainings Complete? (Y/N)</th>
            <th>BFSI Training Courses Complete? (Y/N)</th>
            <th>Skill Gap Trainings Complete? (Y/N)</th>
            <th>Skill Gap</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(function(d){
              return(
                <tr>
                  <th scope="row">{count++}</th>
                  <td><Link to={"/"+d['Emp No']}>{d['Emp No']}</Link></td>
                  <td>{d['Emp Name']}</td>
                  <td>{d['Mentor']}</td>
                  <td>{d['Technology/Skills']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['Digithon Cleared? (Y/N/NA)'] == 'Y') {return "#b2ff59";}
                      else if(d['Digithon Cleared? (Y/N/NA)'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>{d['Digithon Cleared? (Y/N/NA)']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['Digital Academy Complete? (Y/N/NA)'] == 'Y') {return "#b2ff59";}
                      else if(d['Digital Academy Complete? (Y/N/NA)'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>{d['Digital Academy Complete? (Y/N/NA)']}</td>
                  <td>{d['Digital Academy Type']}</td>
                  <td>{d['Digital Academy Completion Date']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['Agile Trainings Complete? (Y/N)'] == 'Y') {return "#b2ff59";}
                      else if(d['Agile Trainings Complete? (Y/N)'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>{d['Agile Trainings Complete? (Y/N)']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['BFSI Training Courses Complete? (Y/N)'] == 'Y') {return "#b2ff59";}
                      else if(d['BFSI Training Courses Complete? (Y/N)'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>{d['BFSI Training Courses Complete? (Y/N)']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['Skill Gap Trainings Complete? (Y/N)'] == 'Y') {return "#b2ff59";}
                      else if(d['Skill Gap Trainings Complete? (Y/N)'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>
                  {d['Skill Gap Trainings Complete? (Y/N)']}</td>
                  <td style = {{backgroundColor:
                    (()=>{
                      if(d['Skill Gap'] == 'Y') {return "#b2ff59";}
                      else if(d['Skill Gap'] == 'NA') {return "#5c6bc0";}
                      else {return "#ff8a65"}
                  })()}}>{d['Skill Gap']}</td>
                </tr>
             );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
});

module.exports = EmployeeData;
