module.exports = function(req, res, next) {
  const { email, firstName, lastName, phone, password } = req.body;

  function validEmail(userEmail) {
    // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail);
  }

  if (req.path === "/register") {
    if (![firstName, lastName, email, phone, password].every(Boolean)) {
      return res.json("Missing Credentials, First Name, Last Name, Email, Phone, Password are all required");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }else if(password.length <8){
      return res.json("password must be at least 8 characters")
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }else if (req.path === "/forgot") {
    if (!email) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }

  next();
};
