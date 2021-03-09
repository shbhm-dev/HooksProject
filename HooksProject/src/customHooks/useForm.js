/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
const useForm = (callback, validateLogin) => {
  const [values, setValues] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (value, name) => {
    console.log(values);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setErrors(validateLogin(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
export default useForm;
