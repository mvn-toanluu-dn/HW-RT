import { useNavigate } from 'react-router-dom'
import {useState} from 'react'


export default function useAuth() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useNavigate();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify({ email }));
        setUser({ email });
        setIsLogged(true);
        history.push("/account");
        res({ email });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    history.push("/");
  };

  return { isLogged, login, logout };
}

