import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './libs/date';
import './libs/string';

import Layout from  './views/Layout';
import Top from  './controllers/Top';
import TweetsIndex from  './controllers/Tweets/Index';
import TweetsShow from  './controllers/Tweets/Show';
import TweetsCreate from  './controllers/Tweets/Create';
import TweetsEdit from  './controllers/Tweets/Edit';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/tweets" element={<TweetsIndex />} />
          <Route path="/tweets/:id" element={<TweetsShow />} />
          <Route path="/tweets/new" element={<TweetsCreate />} />
          <Route path="/tweets/:id/edit" element={<TweetsEdit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}