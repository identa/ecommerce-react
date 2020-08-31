import React from "react";

function Login() {
  return (
    <div className="container text-center">
      <form className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-info btn-block" type="submit">
          Sign in
        </button>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
        <i className="fab fa-facebook-f pr-2"></i>
            Sign in with Facebook
        </button>
        <button className="btn btn-lg btn-danger btn-block" type="submit">
        <i className="fab fa-google pr-2"></i>
            Sign in with Google
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    </div>
  );
}

export default Login;
