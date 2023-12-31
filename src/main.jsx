import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthProvider.jsx";
import App from "./App.jsx";
import { store, persistor } from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
