import React from 'react';

function TeamMember4({ formData, errorMsg ,setFormData, handleChange }) {
  return (
    <div className="form-input text-xl">
      <h1 className= "member">Member 4</h1>
      <label htmlFor="name4">Name: </label>
      <input
        type="text"
        name="name4"
        defaultValue={formData["name4"]}
        onChange={handleChange}
        placeholder="Enter Member's Name"
      />
      <label htmlFor="college4">College/University: </label>
      <input
        type="text"
        name="college4"
        defaultValue={formData["college4"]}
        onChange={handleChange}
        placeholder="Enter Member's College"
      />
      <label htmlFor="email4">E-Mail: </label>
      <input
        type="email"
        name="email4"
        defaultValue={formData["email4"]}
        onChange={handleChange}
        placeholder="Enter Member's Email"
      />
      {errorMsg["email4"] && <p className=''>{errorMsg["email4"]}</p>}
      <label htmlFor="number4">Phone Number: </label>
      <input
        type="tel"
        name="number4"
        maxLength={10}
        minLength={10}
        defaultValue={formData["number4"]}
        onChange={handleChange}
        placeholder="Enter Member's Number"
      />
      <label htmlFor="github4">Github Profile: </label>
      <input
        type="url"
        name="github4"
        defaultValue={formData["github4"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="linkedin4">Linkedin Profile: </label>
      <input
        type="url"
        name="linkedin4"
        defaultValue={formData["linkedin4"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="size4">T-shirt Size: </label>
      <select
        name="size4"
        defaultValue={formData["size4"]}
        onChange={handleChange}
      >
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
      <label htmlFor="food4">Food Preference</label>
        
          {formData["food4"] && formData["food4"]=="veg" && 
          <>
          <div className='flex'><div className='mr-2'><input defaultChecked onChange={handleChange} type="radio" name="food4" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food4" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {formData["food4"] && formData["food4"]=="nonveg" && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food4" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input defaultChecked onChange={handleChange} style={{color:"white"}} type="radio" name="food4" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {!formData["food4"] && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food4" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food4" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
    </div>
  );
}

export default TeamMember4;