import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './resources/theme';
import { ThemeProvider } from 'react-jss';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
