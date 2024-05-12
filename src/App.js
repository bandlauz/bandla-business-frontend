import React from 'react';
import Footer from './components/Footer';
import './css/App.css';

const Login = React.lazy(() => import('./pages/Login/Login'));

export default function App() {
  return (
    <>
      <div className="content-body">
        <Login />
      </div>
      <Footer />
    </>
  );
}
