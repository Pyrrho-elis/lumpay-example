# React Payment Processing Example with LumePay

This is a React application demonstrating a secure payment processing flow using the LumePay SDK. The project shows how to implement end-to-end payment handling with proper error management, loading states, and environment variable configuration.

## Key Features

- Secure API key handling using environment variables
- Complete payment flow implementation:
  - Create payment intent
  - Display payment instructions
  - Verify transactions
  - Check payment status
- Clean component architecture with separation of concerns
- Error handling and user feedback
- Loading states for better user experience
- Responsive design with CSS styling
- Modular code organization

## Getting Started

1. Install the required dependencies:
```bash
npm install lumepay-sdk dotenv react-spinners

2. Create a .env file in the root directory and add your LumePay API key:
```
VITE_LUMEPAY_API_KEY=your-api-key-here
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000/
