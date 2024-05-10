import { useRef } from 'react';
import Input from '../../components/Input';
import './Login.css';

export default function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  function login() {
    const loginData = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    console.log(loginData);
  }

  return (
    <>
      <div className="login_page center_con">
        <div className="login_con">
          <h2>Log in</h2>
          <hr />
          <Input ref={usernameInput} label="Username" type="text" />
          <Input ref={passwordInput} label="Password" type="password" />
          <div className="login_btn" onClick={login}>
            Log in
          </div>
        </div>
      </div>
    </>
  );
}
