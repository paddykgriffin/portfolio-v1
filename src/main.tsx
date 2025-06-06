import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/global.css';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Bootstrap from './Bootstrap';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  if (process.env.NODE_ENV === 'production') {
    root.render(
      <React.StrictMode>
        <Bootstrap />
      </React.StrictMode>,
    );
  } else {
    root.render(<Bootstrap />);
  }
} else {
  throw new Error('No root container found');
}
