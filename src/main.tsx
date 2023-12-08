import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import LoginCard from './pages/LoginCard'


const root = createRoot(document.getElementById('root') as HTMLElement);

root.render (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginCard />} />
        </Routes>
      </Router>
    </ChakraProvider>
);


