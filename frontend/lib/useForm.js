import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our fields
  const [inputs, setInputs] = useState(initial);

  // {
  //   name: 'north facers',
  //   description: 'climb everest in these',
  //   price: '20000'
  // }

  function handleChange(e) {
    setInputs({
      // copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  // return the data we want to surface from this custom hook
  return {
    inputs,
    handleChange,
  };
}
