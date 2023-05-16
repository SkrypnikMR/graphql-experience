import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '@services/graphql/client';
import ErrorBoundary from '@components/ErrorBoundary';
import App from '@components/App';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
