import React from 'react';

function Idea({ formData, setFormData, handleChange }) {
  return (
    <div className="form-input text-xl">
      <label htmlFor="idea" className='text-2xl'>Idea: </label>
      <textarea 
        name="idea" 
        placeholder="Explain Your Idea"
        defaultValue={formData["idea"]}
        onChange={handleChange}
      />
    </div>
  )
}

export default Idea;