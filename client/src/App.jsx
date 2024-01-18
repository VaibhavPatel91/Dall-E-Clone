import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* remove height of the header at last that is  h-14 or h-16 */}
      <header className="w-full h-16 flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="object-contain w-28"/>
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>

    </BrowserRouter>
  );
};

export default App;
