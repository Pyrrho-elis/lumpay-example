import React, { useState } from 'react';
import './App.css';
import { createPaymentIntent, submitPayment, getIntentStatus } from './paymentHelper';
import PaymentInstructions from './components/PaymentInstructions';
import PaymentStatus from './components/PaymentStatus';
import { ClipLoader } from 'react-spinners';

const product = {
  name: 'Mock Product',
  price: 200,
  description: 'This is a mock product',
};

function App() {
  const [intent, setIntent] = useState(null);
  const [status, setStatus] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateIntent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const newIntent = await createPaymentIntent(
        Math.round(product.price),
        'customer@example.com',
        { productName: product.name }
      );
      setIntent(newIntent);
      setStatus(null);
    } catch (err) {
      setError(err.message);
      setIntent(null);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyPayment = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!intent) {
        throw new Error('No payment intent found');
      }

      const result = await submitPayment(intent.id, transactionId);
      const currentStatus = await getIntentStatus(intent.id);
      setStatus(currentStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>

      <div className="payment-flow">
        {!intent ? (
          <button 
            className="buy-button" 
            onClick={handleCreateIntent}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader size={20} />
            ) : (
              'Create Payment Intent'
            )}
          </button>
        ) : (
          <>
            <PaymentInstructions intent={intent} />
            <div className="verify-section">
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter transaction ID"
                disabled={loading}
              />
              <button 
                className="verify-button" 
                onClick={handleVerifyPayment}
                disabled={loading || !transactionId}
              >
                {loading ? (
                  <ClipLoader size={20} />
                ) : (
                  'Verify Payment'
                )}
              </button>
            </div>
          </>
        )}

        {status && <PaymentStatus status={status} />}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;