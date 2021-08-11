import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  addEmployee = () => {
    this.props.history.push("/add");
  };

  editEmployee = (id)=>{
    this.props.history.push(`/update/${id}`);
    
  }
  deleteEmployee = (id)=>{
    EmployeeService.deleteEmployee(id).then(res=>{
      this.setState({
        employees:this.state.employees.filter(employee=>employee.id !== id)
      });
    })
  }

  render() {
    return (
      <div>
        <h2 className="text-center mt-10">List Employee</h2>

        <button className="btn btn-primary mt-10 " onClick={this.addEmployee}>
          <FontAwesomeIcon icon={faPlus} /> Add Employee{" "}
        </button>

        <div className="row">
          <table className="table table-striped table-bordered ">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Edit <FontAwesomeIcon icon={faEdit} />
                    </button>

                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger ml-10"
                    >
                      Delete 
                       <FontAwesomeIcon  icon={faTrash}  />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListEmployee;
