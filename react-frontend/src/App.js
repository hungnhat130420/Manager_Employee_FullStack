import "./App.css";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add" component={AddEmployee}></Route>
            <Route path="/update/:id" component={UpdateEmployee}></Route>
            <ListEmployee />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
