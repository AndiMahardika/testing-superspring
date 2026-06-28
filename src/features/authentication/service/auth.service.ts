import { BASE_URL_API } from '../../../constant/BASE_URL';

export interface LoginResult {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  token: string;
}

interface LoginResponse {
  status: boolean;
  message: {
    data: LoginResult;
  };
}

export async function loginUser(username: string, password: string) {
  const response = await fetch(`${BASE_URL_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data: LoginResponse = await response.json();

  return data;
}
