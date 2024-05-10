import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/Input';
import { isValidUsername } from '../../js/utils/checker';
import { addError } from '../../js/utils/errorInput';
import './Login.css';

export default function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  function login() {
    const usernameVal = usernameInput.current.value;
    const [username, companyName] = usernameVal.split('@');

    if (!isValidUsername(username) || !isValidUsername(companyName)) {
      toast.error(`Foydalanuvchi nomi noto'g'ri`);
      addError(usernameInput.current);
      return;
    }

    const passwordVal = passwordInput.current.value;
    if (!passwordVal) {
      toast.error('Parol kiriting');
      addError(passwordInput.current);
      return;
    }

    const loginData = {
      username: usernameVal,
      password: passwordVal,
    };

    console.log(loginData);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') login();
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
          />
          <Input
            ref={passwordInput}
            label="Parol"
            type="password"
            onKeyPress={handleKeyPress}
          />
          <div className="login_btn" onClick={login}>
            Kirish
          </div>
        </div>
      </div>
    </>
  );
}
