import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Login from "./Components/Login";
import UserList from "./Components/UserList";


function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000, 
        }}
      />{" "}
      
      <Routes>
        <Route path="/" element={<Login />} />
        {/* extra route */}
        <Route path="/api/login" element={<Login />} />

        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
