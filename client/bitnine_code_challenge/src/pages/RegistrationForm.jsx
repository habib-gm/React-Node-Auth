import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  updateField,
  resetRegistration,
  registerUser,
} from "../redux/registrationSlice";
import {
  validateFirstName,
  validateLastName,
  validatePhoneNumber,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../utils/formValidators";
import AuthInput from "../components/AuthInput";
import AuthImage from "../components/AuthImage";
import Spinner from "../components/Spinner";
import {
  mdiAccount,
  mdiEmail,
  mdiPhone,
  mdiFormTextboxPassword,
} from "@mdi/js";
import { StatusEnum } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.registration);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var valid = validateFirstName(registrationData.firstName, handleChange);
    valid = validateLastName(registrationData.lastName, handleChange) || valid;
    valid = validatePhoneNumber(registrationData.phone, handleChange) || valid;
    valid = validateEmail(registrationData.email, handleChange) || valid;
    valid = validatePassword(registrationData.password, handleChange) || valid;
    valid =
      validateConfirmPassword(
        registrationData.confirmPassword,
        registrationData.password,
        handleChange
      ) || valid;
    if (valid) return;
    var a = await dispatch(registerUser(registrationData));

    if (a.payload && a.type === "registration/registerUser/fulfilled") {
      if (a.payload.created) {
        dispatch(resetRegistration());
        navigate("/signin");
      }else if (a.payload.error === "User already exist!"){
        toast.error(
          "Error: User with this email already exist!",
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }

    } else {
      toast.error(
        "Error, Please try again. check your network if the issue persists to happen",
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
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
    <section className="bg-white dark:bg-gray-900">
      <ToastContainer />
      <div className="flex justify-center min-h-screen ">
        <AuthImage />
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            {/* {registrationData.registrationError && <p className="mt-4 text-gray-500 dark:text-gray-400">
              {registrationData.registrationError}
            </p>} */}

            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col"
            >
              <div className="grid grid-cols-1 gap-y-3 gap-x-6 mt-8 md:grid-cols-2 w-full">
                <AuthInput
                  label="First Name"
                  type="text"
                  placeholder="John"
                  handleChange={handleChange}
                  value={registrationData.firstName}
                  valueName="firstName"
                  validateValue={validateFirstName}
                  valueError={registrationData.firstNameError}
                  icon={mdiAccount}
                />

                <AuthInput
                  label="Last Name"
                  type="text"
                  placeholder="Snow"
                  handleChange={handleChange}
                  value={registrationData.lastName}
                  valueName="lastName"
                  validateValue={validateLastName}
                  valueError={registrationData.lastNameError}
                  icon={mdiAccount}
                />

                <AuthInput
                  label="Phone number"
                  type="text"
                  placeholder="+XXX-XX-XXXX-XXX"
                  handleChange={handleChange}
                  value={registrationData.phone}
                  valueName="phone"
                  validateValue={validatePhoneNumber}
                  valueError={registrationData.phoneError}
                  icon={mdiPhone}
                />

                <AuthInput
                  label="Email address"
                  type="email"
                  placeholder="johnsnow@example.com"
                  value={registrationData.email}
                  handleChange={handleChange}
                  valueName="email"
                  validateValue={validateEmail}
                  valueError={registrationData.emailError}
                  icon={mdiEmail}
                />

                <AuthInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={registrationData.password}
                  handleChange={handleChange}
                  valueName="password"
                  validateValue={validatePassword}
                  valueError={registrationData.passwordError}
                  icon={mdiFormTextboxPassword}
                />

                <AuthInput
                  label="Confirm password"
                  type="password"
                  placeholder="Enter your password"
                  value={registrationData.confirmPassword}
                  value2={registrationData.password}
                  handleChange={handleChange}
                  valueName="confirmPassword"
                  validateValue={validateConfirmPassword}
                  valueError={registrationData.confirmError}
                  icon={mdiFormTextboxPassword}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-1/2 flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer disabled:cursor-auto transition ease-in duration-500 mt-3"
                disabled={
                  registrationData.registrationStatus === StatusEnum.PENDING
                }
              >
                <span
                  className={`${
                    registrationData.registrationStatus === StatusEnum.PENDING
                      ? "visible"
                      : "hidden"
                  }`}
                >
                  {" "}
                  <Spinner />{" "}
                </span>
                <span
                  className={`${
                    registrationData.registrationStatus === StatusEnum.PENDING
                      ? "visible ml-2"
                      : "hidden"
                  }`}
                >
                  {" "}
                  Loading...{" "}
                </span>
                <span
                  className={`${
                    registrationData.registrationStatus === StatusEnum.PENDING
                      ? "hidden"
                      : "visible"
                  }`}
                >
                  Sign Up{" "}
                </span>
              </button>
              <p className="items-center justify-center mt-5 text-center text-md text-gray-500 mb-5">
                <span>Already have an account? </span>
                <Link
                  to="/signin"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  {" "}
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
