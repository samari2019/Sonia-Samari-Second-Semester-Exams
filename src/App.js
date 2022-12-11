
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header";
import TestErrorBoundary from "./Pages/TestErrorBoundary";
import NotFoundPage from "./Pages/NotFoundPage";
import Counter from "./Pages/Counter"
import Reducer from "./Pages/Reducer"
import { ErrorBoundary } from 'react-error-boundary'


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}



const App = () => {
  const [explode, setExplode] = React.useState(false)

  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useCounter" element={<Counter />} />
          <Route path="/useReducer" element={<Reducer />} />
          <Route path="/errorboundary" element={<TestErrorBoundary explode={explode} setExplode={setExplode} />} />
          <Route path="/*" element={< NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
export default App;
