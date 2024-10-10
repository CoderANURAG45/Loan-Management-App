import React, { useState } from 'react';
import axios from 'axios';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: 0,
    loanTenure: 0,
    employmentStatus: '',
    employmentAddress: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/loans', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting loan application:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input type="number" name="loanAmount" placeholder="Loan Amount" onChange={handleChange} />
      <input type="number" name="loanTenure" placeholder="Loan Tenure (months)" onChange={handleChange} />
      <input type="text" name="employmentStatus" placeholder="Employment Status" onChange={handleChange} />
      <input type="text" name="employmentAddress" placeholder="Employment Address" onChange={handleChange} />
      <textarea name="reason" placeholder="Reason for Loan" onChange={handleChange}></textarea>
      <button type="submit">Apply for Loan</button>
    </form>
  );
};

export default LoanForm;