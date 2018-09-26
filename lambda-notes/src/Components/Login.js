import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import login from "../login.jpg";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:9000/api/notes/login", userLogin)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("jwt", token);
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {


    return (
      <div className="login-page">
      <FormGroup className = "form-login">
      <h2>QuickNotes</h2>
        <form>
        <h1>Login</h1>
          <FormControl
            type="text"
            placeholder="Username"
            onChange={this.onInputChangeHandler}
            value={this.state.username}
            name="username"
          />
          <FormControl
            type="password"
            placeholder="Password"
            onChange={this.onInputChangeHandler}
            value={this.state.password}
            name="password"
          />
          <div onClick={this.onSubmitHandler} className = 'button-login-screen' type="submit">Login</div>
        <p>
          Don't have an account? Sign up <Link to="/signup"> here </Link>
        </p>
        </form>
        </FormGroup>  
      </div>
    );
  }
}

export default Login;
