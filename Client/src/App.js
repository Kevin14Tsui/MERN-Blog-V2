import "./App.css";
import Header from "./Header";
import Post from "./Post";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
          </main>
        }
      />
      <Route path="{/login}" element={<div>login page</div>} />
    </Router>
  );
}

export default App;
