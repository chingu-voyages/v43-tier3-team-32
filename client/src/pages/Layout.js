import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/sign-up">sign-up</Link>
          </li>
          <li>
            <Link to="/chat">chat</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};