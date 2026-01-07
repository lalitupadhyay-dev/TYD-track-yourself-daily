import type { RegisterRequestDTO } from "../dtos/auth.dto";
import authService from "../services/auth.service";

export function useRegister() {
  const registerUser = async (formData: RegisterRequestDTO) => {
    try {
      const data = await authService.register(formData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { registerUser };
}

export default useRegister;
