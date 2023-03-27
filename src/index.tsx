import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App';
import light from './theme/light';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// TODO: need to provide facility to switch theme
// for now it just use light theme
root.render(
  <React.StrictMode>
    <ChakraProvider theme={light}>
      <ColorModeScript initialColorMode={light.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);



