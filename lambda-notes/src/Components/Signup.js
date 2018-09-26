import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class SignUp extends React.Component {
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
    event.preventDefault();
    const userSignup = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:9000/api/notes/register", userSignup)
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
        <h1>Sign Up</h1>
        <form>
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
         <div onClick={this.onSubmitHandler} className = 'button-login-screen' type="submit">Get Started</div>
        </form>
        <p>
          Already have an account? Login <Link to="/login"> here </Link>
        </p>
        </FormGroup>
      </div>
    );
  }
}

export default SignUp;
