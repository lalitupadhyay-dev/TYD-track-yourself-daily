import { api } from "../api/axios.ts";
import type { RegisterRequestDTO } from "../dtos/auth.dto.ts";

export interface ApiError {
  error: string;
  statusCode: number;
}

const authService = {
  register: async function (userData: RegisterRequestDTO) {
    try {
      const response = await api.post("/user/create", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
