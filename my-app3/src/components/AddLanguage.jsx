import React, { useState } from 'react';
import "./styles/style.scss";

const AddLanguage = (props) => {
  const [formData, setFormData] = useState({
    title: "", scope: [], difficulties: "", duration: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    props.dataSetLanguagesHandler((prev) => [formData, ...prev]);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "scope") {
      value = value.split(",").map((item) => item.trim());
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='add-language-form'>
      <h1 className='my-10 text-center font-bold'>Add Language!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 p-3'>
        <input
          className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition'
          onChange={handleChange}
          type="text"
          name='title'
          placeholder='title'
          value={formData.title}
        />
        <input
          className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition'
          onChange={handleChange}
          type="text"
          name='duration'
          placeholder='duration'
          value={formData.duration}
        />
        <input
          className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition'
          onChange={handleChange}
          type="text"
          name='scope'
          placeholder='scope (comma separated)'
          value={formData.scope}
        />
        <input
          className='p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition'
          onChange={handleChange}
          type="text"
          name='difficulties'
          placeholder='difficulties (Easy/Medium/Hard)'
          value={formData.difficulties}
        />
        <button
          className='bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 transition-all'
          type='submit'
        >
          Add Language!
        </button>
      </form>
    </div>
  );
};

export default AddLanguage;
