import React from 'react';

function TeamMember3({ formData, errorMsg,setFormData, handleChange }) {
  return (
    <div className="form-input text-xl">
      <h1 className= "member">Member 3</h1>
      <label htmlFor="name3">Name: </label>
      <input
        type="text"
        name="name3"
        defaultValue={formData["name3"]}
        onChange={handleChange}
        placeholder="Enter Member's Name"
      />
      <label htmlFor="college3">College/University: </label>
      <input
        type="text"
        name="college3"
        defaultValue={formData["college3"]}
        onChange={handleChange}
        placeholder="Enter Member's College"
      />
      <label htmlFor="email3">E-Mail: </label>
      <input
        type="email"
        name="email3"
        defaultValue={formData["email3"]}
        onChange={handleChange}
        placeholder="Enter Member's Email"
      />
      {errorMsg["email3"] && <p className=''>{errorMsg["email3"]}</p>}
      <label htmlFor="number">Phone Number: </label>
      <input
        type="tel"
        name="number3"
        maxLength={10}
        minLength={10}
        defaultValue={formData["number3"]}
        onChange={handleChange}
        placeholder="Enter Member's Number"
      />
      <label htmlFor="github3">Github Profile: </label>
      <input
        type="url"
        name="github3"
        defaultValue={formData["github3"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="linkedin3">Linkedin Profile: </label>
      <input
        type="url"
        name="linkedin3"
        defaultValue={formData["linkedin3"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="size3">T-shirt Size: </label>
      <select
        name="size3"
        defaultValue={formData["size3"]}
        onChange={handleChange}
      >
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
      <label htmlFor="food3">Food Preference</label>
        
          {formData["food3"] && formData["food3"]=="veg" && 
          <>
          <div className='flex'><div className='mr-2'><input defaultChecked onChange={handleChange} type="radio" name="food3" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food3" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {formData["food3"] && formData["food3"]=="nonveg" && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food3" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input defaultChecked onChange={handleChange} style={{color:"white"}} type="radio" name="food3" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {!formData["food3"] && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food3" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food3" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
    </div>
  );
}

export default TeamMember3;