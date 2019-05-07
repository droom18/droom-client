import React, { Component } from 'react';
import axios from 'axios';
// import School from './School';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://lambdaschool.invisionapp.com/share/Q5RJZ2MZEKJ#/screens/358744755')
      .then(res => {
        this.setState({ schools: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      })
  }

  addSchool= (school) => {
    
    axios
      .post("https://droom-buildweek-4-15-19.herokuapp.com/api/", school)
      .then(res => {
        this.setState({ schools: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
       
      })
  }

    render() {
      return (
        <div className="Schools">
          <h1>Schools.js</h1>
          <ul>
            {this.state.schools.map(school => {
              console.log(school)
                // <h3>{school}</h3>
                // <School
                // <h3>{this.state.school}</h3>
                  // name={school.name}
                  // id={School.id}
                  // key={School.id}
                // />
              
            })}
          </ul>
        </div>
      );
    }
  }
  
  // Schools.defaultProps = {
  //  smurfs: [],
  // };
  
  export default Schools;
  