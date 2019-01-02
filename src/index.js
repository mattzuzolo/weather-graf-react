import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//GraphQL
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

//Make local apollo client
//pass options object to add ID helper
//Identifies every record coming from server to prevent re-fetching
//Apollo can identify info from a local cache
const client = new ApolloClient({
  //all fetched data will run through below method and return ID
  dataIdFromObject: o => o.id,
  //apollo can now identify everything fetched
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
