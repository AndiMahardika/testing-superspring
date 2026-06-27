import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
  const token = localStorage.getItem("token_super_spring");

  if(token) {
    return <Outlet />
  }

  return <Navigate to="/login" />
}