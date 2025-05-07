import React from 'react';

const PaymentInstructions = ({ intent }) => {
    return (
        <div className="payment-instructions">
            <h2>Payment Instructions</h2>
            <p>Please transfer ${intent.amount / 100} to the following account:</p>
            <p><strong>Account Name:</strong> LumePay Merchant</p>
            <p><strong>Account Number:</strong> 1234567890</p>
            <p><strong>Bank Name:</strong> CBE</p>
            <p><strong>Reference:</strong> {intent.id}</p>
        </div>
    );
};

export default PaymentInstructions;