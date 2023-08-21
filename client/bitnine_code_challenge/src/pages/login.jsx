import { useDispatch, useSelector } from "react-redux";
import { updateField, login } from "../redux/authSlice";
import { validateEmail, validatePassword } from "../utils/formValidators";
import { Link } from "react-router-dom";
import AuthInput  from "../components/AuthInput";
import AuthImage from "../components/AuthImage";
import { mdiEmail, mdiFormTextboxPassword } from '@mdi/js';
import Spinner from "../components/Spinner";
import { StatusEnum } from "../utils/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth);

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    var valid = validateEmail(loginData.email, handleChange);
    valid = validatePassword(loginData.password, handleChange) || valid;
    if (valid) return;
    var a = await dispatch(
      login({
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      })
    );
    console.log(a)
    if(a.type === "auth/login/fulfilled" && a.payload.error === "Invalid Credential"){
      toast.error('Error, Invalid Credential', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    if(a.error && a.error.message){
      toast.error('Error, Please try again. check your network if the issue persists to happen', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-row">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-full ">
        
        <div className="flex items-center justify-center p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white w-3/5 max-md:w-full max-md:p-4 lg:w-2/5 min-h-screen">
          <div className="max-w-md w-full space-y-8 min-w-sm">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Please sign in to your account
              </p>
            </div>

            <form className="mt-8 space-y-3" onSubmit={handleLogin}>
              {loginData.error ?? (
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {loginData.error}
                </p>
              )}
              <input type="hidden" name="remember" value="true" />
              <AuthInput
                value={loginData.email}
                valueName="email"
                valueError={loginData.emailError}
                handleChange={handleChange}
                validateValue={validateEmail}
                type="email"
                placeholder = "Enter your email"
                label="Email Address"
                icon={mdiEmail}
              />
              <AuthInput
                value={loginData.password}
                valueName="password"
                valueError={loginData.passwordError}
                handleChange={handleChange}
                validateValue={validatePassword}
                type="password"
                placeholder="Enter your password"
                label="Password"
                icon={mdiFormTextboxPassword}
              />
              
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    onChange={(e) =>
                      handleChange("rememberMe", e.target.checked)
                    }
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 mt-6"
                disabled = {loginData.authStatus === StatusEnum.PENDING}
              >
                <span className = {`${loginData.authStatus === StatusEnum.PENDING ? "visible" : "hidden" }`} > <Spinner/> </span>
                <span className = {`${loginData.authStatus === StatusEnum.PENDING ? "visible ml-2": "hidden" }`}> Loading... </span>
                <span className = {`${loginData.authStatus === StatusEnum.PENDING ? "hidden" : "visible" }`} >Sign in </span>
              </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don`t have an account?</span>
                <Link
                  to="/signup"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <AuthImage/>
      </div>
    </div>
  );
};

export default LoginPage;
