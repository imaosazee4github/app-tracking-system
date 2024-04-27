import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const ErrorFallback = ({error}) => {
  return (
    <div role='alert'>
      <p>Something went wrong</p>
      <pre style={{color: "red"}}>{error.message}</pre>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
