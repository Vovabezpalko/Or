import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "./reducers/index";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';


const store = createStore(rootReducer);
const theme=createTheme({
palette:{
  mode: 'dark',
  primary:{
    main:'#61dafb'
  },mode:'dark'
}
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
