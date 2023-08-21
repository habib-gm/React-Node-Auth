import AuthInput from "../components/AuthInput";
import AuthImage from "../components/AuthImage";
import { mdiEmail } from "@mdi/js";
import { validateEmail } from "../utils/formValidators";
import { useDispatch, useSelector } from "react-redux";
import { updateField, verify, resetVerify } from "../redux/forgotPasswordSlice";
import { Link,  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StatusEnum } from "../utils/constants";
import Spinner from "../components/Spinner";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const verifyData = useSelector((state) => state.forgotPassword);
//   const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleForgetEmail = async (e) => {
    e.preventDefault();
    var valid = validateEmail(verifyData.email, handleChange);
    if (valid) return;
    var a = await dispatch(
      verify({
        email: verifyData.email,
      })
    );
    console.log(a);
    if (a.type === "forgotPassword/verify/fulfilled") {
       if(a.payload && a.payload.sent){
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch(resetVerify());
       }
       else if(a.payload && a.payload.error === "User Does not exist!"){
        toast.error(
          "Error, Email address not found! Please check your email address and try again",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
    }}else if (a.type === "forgotPassword/verify/rejected") {
      toast.error(
        "Error, Please try again. check your network if the issue persists to happen",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <body className="antialiased flex justify-center items-center min-h-screen min-w-full ">
      <ToastContainer />
      <div className="absolute w-screen h-screen top-0 left-0 -z-50">
        <AuthImage showText={false} />
      </div>
      <div className="max-w-lg h-fit bg-white p-8 rounded-xl shadow shadow-slate-300 z-[1000] ">
        <h1 className="text-4xl font-medium sm:px-8 sm:pt-5">Reset password</h1>
        <p className="text-slate-500 sm:px-8 pb-3">
          Enter your Email to reset the password
        </p>
        <form className="my-3" onSubmit={handleForgetEmail}>
          <div className="flex flex-col space-y-1">
            <AuthInput
              value={verifyData.email}
              valueName="email"
              valueError={verifyData.emailError}
              handleChange={handleChange}
              validateValue={validateEmail}
              type="email"
              placeholder="Enter your email"
              label="Email Address"
              icon={mdiEmail}
            />
            <button
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              type="submit"
              disabled = {verifyData.verifyStatus === StatusEnum.PENDING}
            >
              <span className = {`${verifyData.verifyStatus === StatusEnum.PENDING ? "hidden" : "visible" }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
              </span>
              <span className = {`${verifyData.verifyStatus === StatusEnum.PENDING ? "visible" : "hidden" }`} > <Spinner/> </span>
                <span className = {`${verifyData.verifyStatus === StatusEnum.PENDING ? "visible ml-2": "hidden" }`}> Loading... </span>
                <span className = {`${verifyData.verifyStatus === StatusEnum.PENDING ? "hidden" : "visible" }`} > <span>Reset password </span> </span>
            </button>
            <p className="text-center pt-2">
              Not registered yet?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default ForgetPassword;
