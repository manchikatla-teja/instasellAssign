import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <AppProvider
      i18n={{
        Polaris: {
          Common: {
            checkbox: 'case � cocher',
          },
          ResourceList: {
            sortingLabel: 'Trier par',
            showing: '{itemsCount} {resource} affich�s',
            defaultItemPlural: 'articles',
            defaultItemSingular: 'article',
            Item: {
              viewItem: "Afficher les d�tails de l'{itemName}",
            },
          },
        },
      }}
    >
    <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
