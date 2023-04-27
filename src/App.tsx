import React from "react";
import { SideNav } from "./components/SideNav";
import { Dashboard } from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex h-screen bg-black text-white font-sfProText">
      <SideNav />
      <div className="w-full h-full bg-black-russian-light rounded-l-4xl">
        <Dashboard />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
