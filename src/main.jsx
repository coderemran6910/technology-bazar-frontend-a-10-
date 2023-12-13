import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <FloatingWhatsApp 
     phoneNumber="+8801789039407" 
     message="Hello! I'm using WhatsApp." 
     accountName="Coder emran"
     position="right" 
     size="60px" 
     backgroundColor="#25D366" 
     borderColor="#128C7E" 
     iconColor="#FFFFFF" 
    />

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
