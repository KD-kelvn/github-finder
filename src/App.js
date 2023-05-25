import React, { useEffect, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import ALerts from "./components/layouts/ALerts";
import About from "./components/pages/About";
import GIthubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   const res = await axios.get(
    //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //   );
    //   setUsers(res.data);
    //   setLoading(false);
    //   setShowClear(false);
    // };
    // fetchData();
  }, []);

  return (
    <>
      <GIthubState>
        <AlertState>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <>
                  <div className="flex flex-col px-[2rem] mt-[5%] md:w-[100%] md:px-[4rem] transition-all delay-150 ease-in-out duration-500">
                    {/* {this.state.alert&&<div className='bg-gray-200 p-5 w-[88%] absolute top-[10%] left-0 right-0 text-red-500'>{this.state.alert.msg}</div>} */}
                    <ALerts />
                    <Search />
                    <Users />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route exact path="/user/:login" element={<User />} />
          </Routes>
        </AlertState>
      </GIthubState>
    </>
  );
};

export default App;
