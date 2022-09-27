import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

export const LoginContext = createContext();

const users = [
  {
    email: "dami@mail.com",
    password: "1",
  },
];

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "",
    logged: false,
  });

  const emailV = { emailV: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ };
  const password = { pass: /^\d{4,6}$/ }; // 4-6 numbers.
  const singup = (email, pass, passConfirm) => {
    let userLS = {
      email: email,
      password: pass,
    };
    if (
      emailV.emailV.test(email) &&
      password.pass.test(pass) &&
      password.pass.test(passConfirm) &&
      pass === passConfirm
    ) {
      users.push(userLS);
      swal("User Created correctly", "Let's shop!", "success", {
        button: "Enjoy!",
      });
      return true;
    } else {
      swal("Check again your credentials", "Try again!", "error", {
        button: "Try again!",
      });
    }
  };

  const login = (values) => {
    const match = users.find((user) => user.email === values.email);

    if (match) {
      if (match.password === values.password) {
        setUser({
          user: match.email,
          logged: true,
        });
      } else {
        swal("Wrong password", "Try again!", "error", {
          button: "Try again!",
        });
      }
    } else {
      swal("Wrong email", "Try again!", "error", {
        button: "Try again!",
      });
    }
  };
  const logOut = () => {
    setUser({
      user: "",
      logged: false,
    });
  };

  const productUploadSuccess = (id) => {
    swal({
      title: `Product Saved!`,
      text: `Product Number ${id} upload in firebase cloud store`,
      icon: "success",
    });
  };
  return (
    <LoginContext.Provider
      value={{ user, login, logOut, productUploadSuccess, singup }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
