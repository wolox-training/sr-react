import React, { Suspense } from 'react';
import { render } from 'react-dom';

import App from 'components/App';
import 'config/i18n';
import 'scss/application.scss';

import reportWebVitals from './reportWebVitals';

const renderApp = () => {
  render(
    <React.StrictMode>
      <Suspense fallback={() => <div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
