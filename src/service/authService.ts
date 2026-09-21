import api from "../api/api";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function register(data: RegisterData) {
    const response = await api.post('/auth/register', data);
    return response.data;
}