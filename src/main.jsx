import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Routes/router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
       <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#00000",
            color: "#06B6D4",
          },
        }}
      />
      <div className="md:max-w-screen-2xl mx-auto bg-black">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
