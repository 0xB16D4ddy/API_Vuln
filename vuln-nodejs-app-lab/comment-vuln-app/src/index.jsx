import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CommentPage from "./pages/CommentPage";
import LinksPage from "./pages/LinksPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="container mx-auto max-w-xl">
          <nav className="flex justify-around py-4 border-b mb-4">
            <NavLink to="/comments" className="text-blue-500 hover:underline">
              Comments
            </NavLink>
            <NavLink to="/links" className="text-blue-500 hover:underline">
              Links
            </NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/comments" element={<CommentPage />} />
              <Route path="/links" element={<LinksPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);
