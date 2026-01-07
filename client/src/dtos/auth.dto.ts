interface RegisterRequestDTO {
  firstName: string;
  middleName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface LoginRequestDTO {
  email: string;
  password: string;
}

export type { RegisterRequestDTO, LoginRequestDTO };
