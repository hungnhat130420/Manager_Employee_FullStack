import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }
  handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.history.push("/employees");
    });
  };
  handleCancel = () => {
    this.props.history.push("/employees");
  };
  render() {
    return (
      <div className="container mt-10">
        <div className="row ">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center"> Add Employee</h3>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group mt-10">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group mt-10">
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    name="emailId"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>

                <button className="btn btn-success " type="submit" >
                    Save 
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.handleCancel}
                 
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmployee;
