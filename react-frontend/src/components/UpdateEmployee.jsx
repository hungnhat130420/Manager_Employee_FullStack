import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let emp = res.data;
      this.setState({
        firstName: emp.firstName,
        lastName: emp.lastName,
        emailId: emp.emailId,
      });
    });
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
    EmployeeService.UpdateEmployee(employee, this.state.id).then((res) => {
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
            <h3 className="text-center"> Update Employee</h3>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group mt-10">
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>

                <div className="form-group mt-10">
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    name="emailId"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.emailId}
                  />
                </div>

                <button className="btn btn-success " type="submit">
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
export default UpdateEmployee;
