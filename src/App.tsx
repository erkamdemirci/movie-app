import React, { useState } from 'react';
import { StoreProvider } from './context';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './components/Layout';
import Homepage from './components/Pages/Home.page';

const queryClient = new QueryClient();

function App() {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.TURKISH);

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.TURKISH}>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout setCurrentLocale={setCurrentLocale} />}>
                <Route index element={<Homepage />} />
                <Route path="/:page/:query" element={<Homepage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </StoreProvider>
    </IntlProvider>
  );
}

export default App;
