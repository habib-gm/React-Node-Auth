import AuthImage from "../components/AuthImage";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="absolute -z-50 w-screen h-screen">
        <AuthImage showText= {false}/>
      </div>
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Bitnine Internship Coding Challenge [ETHIOPIA]</h1>
        <p className="text-gray-600 mb-6">This is sign in and sign up page implementaion</p>
        <p className="text-gray-600 mb-6">[REACT + TAILWIND] is used in frontEnd and [NODE + POSTGRESQL] is used for server</p>
        <Link to= '/signin'><button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Get Started</button></Link>
      </div>
    </div>
  );
};

export default Homepage;