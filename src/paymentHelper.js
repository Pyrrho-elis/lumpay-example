import PaymentGateway from 'lumepay-sdk';


const pg = new PaymentGateway({
  apiKey: import.meta.env.VITE_LUMEPAY_API_KEY,
});

export const createPaymentIntent = async (amount, customerEmail, metadata) => {
  try {
    const intent = await pg.createIntent({
      amount,
      customerEmail,
      metadata,
    });
    return intent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export const submitPayment = async (intentId, transactionId) => {
  try {
    const result = await pg.submitPayment({
      intentId,
      transactionId,
    });
    return result;
  } catch (error) {
    console.error('Error submitting payment:', error);
    throw error;
  }
};

export const getIntentStatus = async (intentId) => {
  try {
    const status = await pg.getIntent(intentId);
    return status;
  } catch (error) {
    console.error('Error fetching intent status:', error);
    throw error;
  }
};