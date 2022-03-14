import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDetail from "./ViewDetail";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:id" element={<ViewDetail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
