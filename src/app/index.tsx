import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import App from "./App";
import GlobalStyle from "@/shared/styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider>
        <GlobalStyle />
        <App />
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
);
