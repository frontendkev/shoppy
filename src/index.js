import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./Redux/ReduxStore/store";
import AppContext from './AppContext/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <AppContext>
        <App />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          newestOnTop={false}
          closeOnClick={true}
          pauseOnHover
          pauseOnFocusLoss
          draggable
          theme='dark'
          rtl={false}
          hideProgressBar={false}
          
        />
        </AppContext>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();