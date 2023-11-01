import React from 'react';

function TeamMember1({ formData, setFormData, errorMsg, handleChange }) {
  return (
    <div className="form-input text-xl ">
      <h1 className= "member">Team Leader</h1>
      <label htmlFor="name1">Name: </label>
      <input
        type="text"
        name="name"
        defaultValue={formData["name"]}
        onChange={handleChange}
        placeholder="Enter Member's Name"
      />
      <label htmlFor="college1">College/University: </label>
      <input
        type="text"
        name="college1"
        defaultValue={formData["college1"]}
        onChange={handleChange}
        placeholder="Enter Member's College"
      />
      <label htmlFor="email1">E-Mail: </label>
      <input
        type="email"
        name="email1"
        defaultValue={formData["email1"]}
        onChange={handleChange}
        placeholder="Enter Member's Email"
      />
      {errorMsg["email1"] && <p className=''>{errorMsg["email1"]}</p>}
      <label htmlFor="number1">Phone Number: </label>
      <input
        type="numeric"
        name="number1"
        maxLength={10}
        minLength={10}
        defaultValue={formData["number1"]}
        onChange={handleChange}
        placeholder="Enter Member's Number"
      />
      <label htmlFor="github1">Github Profile: </label>
      <input
        type="url"
        name="github1"
        defaultValue={formData["github1"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="linkedin1">Linkedin Profile: </label>
      <input
        type="url"
        name="linkedin1"
        defaultValue={formData["linkedin1"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="size1">T-shirt Size: </label>
      <select
        name="size1"
        defaultValue={formData["size1"]}
        onChange={handleChange}
      >
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
      <label htmlFor="food1">Food Preference</label>
        
          {formData["food1"] && formData["food1"]=="veg" && 
          <>
          <div className='flex'><div className='mr-2'><input defaultChecked onChange={handleChange} type="radio" name="food1" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food1" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {formData["food1"] && formData["food1"]=="nonveg" && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food1" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input defaultChecked onChange={handleChange} style={{color:"white"}} type="radio" name="food1" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {!formData["food1"] && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food1" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food1" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          
          
    </div>
    
  );
}

export default TeamMember1;