import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Credit from "./Pages/Credit/Credit";
import Tasks from "./Pages/Tasks/Tasks";
import defaultPosts from "./Posts/defaultPosts";
import { Context } from "./Context";
import Profile from "./Pages/Profile/Profile";
import About from "./Pages/About/About";
import themeColor from "./Themes/themeColor";
import Login from "./Login/Login";
import SinglePost from "./Pages/SinglePost/SinglePost";
import { getDarkMode } from "./Themes/getDarkMode";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("posts")) || defaultPosts
  );
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [postValue, setPostValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        name,
        setName,
        title,
        setTitle,
        postValue,
        setPostValue,
        defaultPosts,
        themeColor,
        darkMode,
        setDarkMode,
        login,
        setLogin,
        getDarkMode,
      }}
    >
      <div className="App" style={getDarkMode(darkMode, "body")}>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="tasks/:id" element={<SinglePost />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
