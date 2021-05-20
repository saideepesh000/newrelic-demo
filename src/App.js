import './App.css';
import Home from './Home'
import { ErrorBoundary } from 'react-error-boundary'

export const ErrorHandler = (error, info) => {
  window.newrelic.noticeError(error) 
}

const ErrorFallback = () => {
  return (
      <h2>Something went wrong</h2>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler} >
      <Home name="Sai"/>
    </ErrorBoundary>
  );
}

export default App;
