import React from "react";
import { Logo, LogoutBtn, Container } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500 sticky top-0 w-full z-10">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>

          <ul className="flex ml-auto ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    // className={`inline-block font-bold px-6 py-2 duration-1000 text-lg hover:text-gray-300 active:text-gray-300 rounded-full `}
                    className={({isActive}) => isActive ? "text-gray-400 inline-block font-bold px-6 py-2 text-lg underline hover:text-gray-400 active:text-gray-300 rounded-full" : "inline-block font-bold px-6 py-2 duration-500  text-lg hover:text-gray-400 active:text-gray-300 rounded-full text-gray-300"}
                    // onClick={() => navigate(item.slug)}
                    to={item.slug}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
