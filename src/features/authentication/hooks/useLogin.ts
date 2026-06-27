import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginResponseData {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  token: string;
}

export default function useLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://dev-portal.gps.id/backend/seen/public/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.status === true) {
        const userData = data.message.data as LoginResponseData;
        const { token } = userData;
        localStorage.setItem("token_super_spring", token);
        navigate('/dashboard');
      } else {
        setError(data.message || "Credential Invalid.");
      }
    } catch (_error) {
      setError("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit,
  };
}