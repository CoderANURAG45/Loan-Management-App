import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Loan {
  _id: string;
  fullName: string;
  loanAmount: number;
  loanTenure: number;
  employmentStatus: string;
  status: string;
}

const LoanDashboard = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const response = await axios.get('http://localhost:3000/api/loans');
      setLoans(response.data);
    };
    fetchLoans();
  }, []);

  return (
    <div>
      <h2>Loan Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Loan Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <tr key={loan._id}>
              <td>{loan.fullName}</td>
              <td>{loan.loanAmount}</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanDashboard;