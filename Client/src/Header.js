import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // save use info
  const [username, setUsername] = useState(null);
  // show user name
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {}

  return (
    <header>
      <Link to="/" className="logo">
        Myblog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logiut</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
