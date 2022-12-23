import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import History from "./Components/History/History";
import Tours from "./Components/Tours/Tours";
import Contacts from "./Components/Contacts/Contacts";
import SignInForm from "./Components/SignInForm/SignInForm";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="profile/*" element={<Profile />} />
            <Route path="dialogs/*" element={<Dialogs />} />
            <Route path="news/*" element={<News />} />
            <Route path="music/*" element={<Music />} />
            <Route path="settings/*" element={<Settings />} />
            <Route path="history/*" element={<History />} />
            <Route path="tours/*" element={<Tours />} />
            <Route path="contacts/*" element={<Contacts />} />
            <Route path="signInForm/*" element={<SignInForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
