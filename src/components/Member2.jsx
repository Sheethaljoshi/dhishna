import React from 'react';

function TeamMember2({ formData, errorMsg, setFormData, handleChange }) {
  return (
    <div className="form-input text-xl">
      <h1 className= "member">Member 2</h1>
      <label htmlFor="name2">Name: </label>
      <input
        type="text"
        name="name2"
        defaultValue={formData["name2"]}
        onChange={handleChange}
        placeholder="Enter Member's Name"
      />
      <label htmlFor="college2">College/University: </label>
      <input
        type="text"
        name="college2"
        onChange={handleChange}
        defaultValue={formData["college2"]}
        placeholder="Enter Member's College"
      />
      <label htmlFor="email2">E-Mail: </label>
      <input
        type="email"
        name="email2"
        defaultValue={formData["email2"]}
        onChange={handleChange}
        placeholder="Enter Member's Email"
      />
      {errorMsg["email2"] && <p className=''>{errorMsg["email2"]}</p>}
      <label htmlFor="number2">Phone Number: </label>
      <input
        type="tel"
        name="number2"
        maxLength={10}
        minLength={10}
        defaultValue={formData["number2"]}
        onChange={handleChange}
        placeholder="Enter Member's Number"
      />
      <label htmlFor="github2">Github Profile: </label>
      <input
        type="url"
        name="github2"
        defaultValue={formData["github2"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="linkedin2">Linkedin Profile: </label>
      <input
        type="url"
        name="linkedin2"
        defaultValue={formData["linkedin2"]}
        onChange={handleChange}
        placeholder="Enter Member's Profile ID"
      />
      <label htmlFor="size2">T-shirt Size: </label>
      <select
        name="size2"
        defaultValue={formData["size2"]}
        onChange={handleChange}
      >
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
      <label htmlFor="food2">Food Preference</label>
        
          {formData["food2"] && formData["food2"]=="veg" && 
          <>
          <div className='flex'><div className='mr-2'><input defaultChecked onChange={handleChange} type="radio" name="food2" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food2" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {formData["food2"] && formData["food2"]=="nonveg" && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food2" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input defaultChecked onChange={handleChange} style={{color:"white"}} type="radio" name="food2" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
          {!formData["food2"] && 
          <>
          <div className='flex'><div className='mr-2'><input  onChange={handleChange} type="radio" name="food2" value="veg" /></div> <div className='text-lg' style={{color:"white"}}>Veg</div>
          </div>
          <div className='flex'>
          <div className='mr-2'><input onChange={handleChange} style={{color:"white"}} type="radio" name="food2" value="nonveg" /></div> <div className='text-lg' style={{color:"white"}}>Non Veg</div>
          </div></>
          }
    </div>
    
  );
}

export default TeamMember2;