import React from 'react';
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <div className="flex flex-col w-full items-center text-center px-5 justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4 ">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Notfound;