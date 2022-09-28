import React, { useState } from 'react';
import Layout from './components/Layout';
import { StoreProvider } from './context';
import { Routes, Route } from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from './components/Pages/Home.page';
import DetailsPage from './components/Pages/Details.page';

const queryClient = new QueryClient();

function App() {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.TURKISH);

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.TURKISH}>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <Layout setCurrentLocale={setCurrentLocale}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:movieId" element={<DetailsPage />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </StoreProvider>
    </IntlProvider>
  );
}

export default App;
