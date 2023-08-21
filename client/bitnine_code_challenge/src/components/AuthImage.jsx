import styles from "../pages/styles/loginFormStyles.module.css";
import PropTypes from 'prop-types';

const AuthImage = ({showText = true})=>{
    return <div
    // className="relative max-md:hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover min-h-screen h-full"
    className="relative hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover min-h-screen"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);",
    }}
  >
    <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
    {showText &&
      <div className="w-full  max-w-md z-10">
      <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
        Get your free account now.
      </h1>
      <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
        Reference site about Lorem Ipsum..
      </div>
      <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
        {" "}
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
        printing and typesetting industry Lorem Ipsum has been the
        industry&aposs standard dummy text ever since the 1500s when an
        unknown printer took a galley of type and scrambled it to make a
        type specimen book it has?
      </div>
    </div>
    }
    <ul className={styles.circles}>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
      <li className={styles.li}></li>
    </ul>
  </div>
}


AuthImage.propTypes = {
  showText: PropTypes.bool,
};

export default AuthImage;