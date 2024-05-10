import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/Input';
import './Login.css';

export default function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [validForm, setValidForm] = useState(false);

  function login() {
    const loginData = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    console.log(loginData);
  }

  function checkValidation() {
    const passwordVal = passwordInput.current.value;
    const [username, companyName] = usernameInput.current.value.split('@');

    setValidForm(
      isValidUsername(username) &&
        isValidUsername(companyName) &&
        passwordVal.length > 0
    );
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && validForm) login();
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="login_page center_con">
        <div className="login_con">
          <h2>Tizimga kirish</h2>
          <hr />
          <Input
            ref={usernameInput}
            label="Foydalanuvchi nomi"
            type="text"
            onKeyPress={handleKeyPress}
            onChange={checkValidation}
          />
          <Input
            ref={passwordInput}
            label="Parol"
            type="password"
            onKeyPress={handleKeyPress}
            onChange={checkValidation}
          />
          <div className="login_btn" onClick={login} disabled={!validForm}>
            Kirish
          </div>
        </div>
      </div>
    </>
  );
}

function isValidUsername(username) {
  if (!username) return false;
  return /^[a-z]+$/.test(username);
}
