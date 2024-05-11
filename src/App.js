import Footer from './components/Footer';
import Login from './pages/Login/Login';
import './css/App.css';

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
