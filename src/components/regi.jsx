import React, { useState } from 'react';
import './reg.css';
import Name from './Name';
import TeamMember1 from './Member1';
import TeamMember2 from './Member2';
import TeamMember3 from './Member3';
import TeamMember4 from './Member4';
import Idea from './Idea';

const RegistrationForm = () => {

  const [page, setPage] = useState(0);
  const FormTitles = ["Register Your Team!", "Enter Team Info!","Enter Team Info!","Enter Team Info!","Enter Team Info!", "Tell Us Your Idea!"];
  const FormButton = ["Get Started!", "Next", "Next","Next","Next", "Submit"];

    const [formData, setFormData] = useState({
    });

    const [errorMsg, seterrorMsg] = useState({
    });

    const DisplayPage = () => {
      if (page==0){
        return(<Name formData={formData} setFormData={setFormData} handleChange={handleChange} /> )
      } else if (page==1){
        return(<TeamMember1 formData={formData} errorMsg={errorMsg} setFormData={setFormData} handleChange={handleChange} />)
      }else if( page == 2 ){
        return(<TeamMember2 formData={formData} errorMsg={errorMsg} setFormData={setFormData} handleChange={handleChange} />)
      }else if( page == 3 ){
        return(<TeamMember3 formData={formData} errorMsg={errorMsg} setFormData={setFormData} handleChange={handleChange} />)
      }else if( page == 4 ){
        return(<TeamMember4 formData={formData} errorMsg={errorMsg} setFormData={setFormData} handleChange={handleChange} />)
      }else{
        return(<Idea formData={formData} setFormData={setFormData} handleChange={handleChange} />)
      }
    }

    const handleChange = (e) => {
      if(e.target.name.slice(0,5)=="email"){
        let inputValue = e.target.value;

        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
          seterrorMsg({ ...formData, [e.target.name]: "Invalid E-mail Address" });
        } else {
          setFormData({ ...formData, [e.target.name]: e.target.value });
          seterrorMsg({ ...formData, [e.target.name]: "" });
        }
      }
      else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }   
    }
    

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here
      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        setPage((currPage) => currPage + 1);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
    }
    const handleGoBack = () => {
      if (page > 0) {
        setPage((currPage) => currPage - 1);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
    }
    

    return (
      <div className="form-container">
              <div className="progressbar">
        <div
          style={{ width: page === 0 ? "16.66%" : page == 1 ? "33.33%" : page == 2 ? "50%" : page == 3 ? "66.66%" : page == 4 ? "83.3%" : "100%" }}
        ></div>
        </div>
        <div className="registration-form">
          <h2 className="form-heading text-4xl">{FormTitles[page]}</h2>
          {DisplayPage()}
          <div className='footer'>
          {page > 0 && (
            <button className="submit-button" onClick={handleGoBack}>
              Back
            </button>
          )}
          <button className="submit-button " onClick={handleSubmit}>{FormButton[page]}</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default RegistrationForm;