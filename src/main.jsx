import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
