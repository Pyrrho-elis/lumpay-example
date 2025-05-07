import React from 'react';

const PaymentStatus = ({ status }) => {
  return (
    <div className="payment-status">
      <h2>Payment Status: {status.status}</h2>
      <p>Amount: ${status.amount}</p>
      <p>Created At: {new Date(status.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PaymentStatus;