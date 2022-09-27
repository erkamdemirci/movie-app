import React, { useState } from 'react';
import Layout from './components/Layout';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import TestPage from './components/Pages/Test.page';
import HomePage from './components/Pages/Home.page';

const queryClient = new QueryClient();

function App() {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.TURKISH);

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.TURKISH}>
      <QueryClientProvider client={queryClient}>
        <Layout setCurrentLocale={setCurrentLocale}>
          <HomePage />
          <TestPage />
        </Layout>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default App;
