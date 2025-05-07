import React from 'react';

const PaymentStatus = ({ status }) => {
  return (
    <div className="payment-status">
      <h2>Payment Status: {status.status}</h2>
      <p>Amount: ${status.amount / 100}</p>
      <p>Created At: {new Date(status.created_at).toLocaleString()}</p>
      <p>Expires At: {new Date(status.expires_at).toLocaleString()}</p>
    </div>
  );
};

export default PaymentStatus;