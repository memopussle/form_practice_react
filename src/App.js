import React from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmedPassword: "",
    newsletter: true,
  });
  console.log(formData);

  function handleChange(event) {
    // replace add event listener
    //  console.log(event.target.value); event.target: target DOMelement which is <input class="form-control mt-5"....>
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target; //destructuring

      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); //prevent default handler
    formData.password === formData.confirmedPassword
      ? console.log("Successfully signed up")
      : console.log("passwords do not match");
    formData.newsletter &&
      console.log("Thanks for signing up for our newsletter!");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email address"
          name="email"
          value={formData.email}
          className="form-control mt-5"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          className="form-control mt-3"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Confirmed Password"
          name="confirmedPassword"
          value={formData.confirmedPassword}
          className="form-control mt-3"
          onChange={handleChange}
        ></input>
        <input
          className="mt-3 mx-2"
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          name="newsletter"
          onChange={handleChange}
        />
        <label htmlFor="newsletter"> I want to join the newsletter</label>
        <br />
        <button type="submit" className="btn btn-md btn-danger mt-3 px-4">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default App;
