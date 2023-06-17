// import { Menu } from '@headlessui/react';
import { useState } from 'react';

const Header = () => {
  const [navigation, setNavigation] = useState([
    { title: 'Home', path: '/' },
    { title: 'About us', path: '/about' },
    { title: 'Fund', path: '/donations/' },
    { title: 'Shop', path: '/shop/' },
  ]);
  const [show, setShow] = useState(true);
  return (
    <nav className="bg-white w-full border-b md:border-0 md:static"
    
    
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img src="/logo1.png" width={120} height={50} />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!show)}
            >
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  id={idx}
                  className=" font-bold text-lgreen hover:text-dblue"
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <a
            href="/Login/Login"
            className="py-3 px-4 text-white hover:text-dblue bg-lgreen hover:bg-medium-shade-blue rounded-md shadow"
          >
            Login
          </a>
          {/* {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="py-3 px-4 text-white hover:text-deep-navy-blue bg-deep-navy-blue hover:bg-medium-shade-blue rounded-md shadow">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg ">
              <Menu.Item>
                <DropdownLink
                  className="flex p-2 hover:bg-gray-200 aboslute z-50"
                  href="/profile"
                >
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink
                  className="flex p-2 hover:bg-gray-200 aboslute z-50"
                  href="/order-history"
                >
                  Order History
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink
                  className="flex p-2 hover:bg-gray-200 aboslute z-50"
                  href="/Cart"
                >
                  Cart
                </DropdownLink>
              </Menu.Item>
              {session.user.isAdmin && (
                <Menu.Item>
                  <DropdownLink
                    className="flex p-2 hover:bg-gray-200 aboslute z-50"
                    href="/admin/dashboard"
                  >
                    Admin Dashboard
                  </DropdownLink>
                </Menu.Item>
              )}
              <Menu.Item>
                <a
                  className="flex p-2 hover:bg-gray-200 aboslute z-50"
                  href="#"
                  onClick={logoutClickHandler}
                >
                  Logout
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link href="/Login/Login">
            <a className="py-3 px-4 text-white hover:text-deep-navy-blue bg-deep-navy-blue hover:bg-medium-shade-blue rounded-md shadow">
              Login
            </a>
          </Link>
        )} */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
