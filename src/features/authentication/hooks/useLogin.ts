import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/auth.service';

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
      const result = await loginUser(email, password);
      localStorage.setItem("token_super_spring", result.message.data.token);
      navigate('/dashboard');
    } catch {
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