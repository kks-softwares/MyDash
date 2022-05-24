import { useState, useEffect } from "react";
import image from './assests/Picture1.png';
import { useNavigate } from "react-router-dom";
// import BarChart from "./ChartPage.js";

function Home() {
  const initialValues = { username: "", email: "", password: "",number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 1){
      navigate('/chartPage')
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "*Username is required!";
    }
    if (!values.phone) {
      errors.phone = "*Phone Number is required!";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
        <div className="row" style={{borderStyle:'solid', borderColor:'#F2F3F8',height:'500px',marginTop:'25px'}}
        >
            <div className="col-md-6" style={{padding:'6px',backgroundColor:'#F2F3F8'}}>
                <img src={image} alt="img" style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="col-md-6" style={{padding:'20px'}}>
                <div style={{backgroundColor:'white'}}>
                    <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                    
                    <div className="field">
                        <label className="labelClass" style={{color:'#A7AFBB'}}>Email <span>{formErrors.email}</span></label>
                        <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="field">
                        <label style={{color:'#A7AFBB'}}>Password <span>{formErrors.password}</span></label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="field">
                        <label style={{color:'#A7AFBB'}}>Username <span>{formErrors.username}</span></label>
                        <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="field">
                        <label style={{color:'#A7AFBB'}}>Your Phone No. <span>{formErrors.phone}</span></label>
                        <input
                        type="number"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formValues.phone}
                        onChange={handleChange}
                        />
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        I read and agree Terms and Conditions
                      </label>
                    </div>

                    <button className="ui button blue mt-4">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <h1>-------------------------------------------------------------------------------</h1>
        <div>
            <BarChart />
        </div> */}
    </div>
  );
}

export default Home;