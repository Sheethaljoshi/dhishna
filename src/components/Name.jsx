import React from 'react';

function Name({ formData, setFormData, handleChange }) {
  return (
    <div className="form-input text-xl">
      <label htmlFor="teamname">Team Name: </label>
      <input
        type="text"
        name="teamname"
        value={formData["teamname"]}
        onChange={handleChange}
        placeholder="Enter your Team Name"
      />
    </div>
  )
}

export default Name;





