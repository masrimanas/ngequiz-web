import {useContext} from 'react';

import { AuthContext,  } from '../stores/AuthContext';

const Home = () => {
  const ctx = useContext(AuthContext);

  const handleClick = async (cb) => {
    // eslint-disable-next-line no-console
    console.log('clicked');
    // eslint-disable-next-line no-unused-expressions
    cb;
  };


  return (
    <>
      <h2>Home (Public)</h2>
      <button
        type="button"
        onClick={ () => handleClick(ctx.handleLogin())}
        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium 
      text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </>
  );
};
export default Home;
