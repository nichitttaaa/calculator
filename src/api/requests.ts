import api from './index.ts';
import type {
  LoginData,
  LoginResponse,
  MySelfResponse,
  RegisterData,
  RegisterResponse,
  PaginationParams,
  PaginationMeta,
  ProductsResponse,
  ProductsCreate,
  ProductsUpdate,
  UserUpdate,
  QuizResponse,
} from './types.ts';

export const register = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const getMySelf = async () => {
  const response = await api.get<MySelfResponse>('/user/profile/myself');
  return response.data;
};

export const refresh = async (token: string) => {
  const response = await api.get('auth/refresh', {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/user/profile/find/${id}`, {
    params: { id },
  });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get<MySelfResponse[]>('/user/profile');
  return response.data;
};

export const getAllProducts = async (
  params: PaginationParams
): Promise<{ meta: PaginationMeta; data: ProductsResponse[] }> => {
  const response = await api.get('/product', {
    params,
  });
  return response.data;
};

export const createProduct = async (
  data: ProductsCreate
): Promise<ProductsResponse> => {
  const response = await api.post('/product', data);
  return response.data;
};

export const deleteProduct = async (productId: string): Promise<void> => {
  const response = await api.delete(`/product/${productId}`);
  return response.data;
};

export const updateProduct = async (
  data: ProductsUpdate,
  productId: string
): Promise<void> => {
  const response = await api.patch(`/product/${productId}`, data);
  return response.data;
};

export const updateUser = async (data: UserUpdate) => {
  const response = await api.patch('/user/profile', data);
  return response.data;
};

export const getQuizData = async () => {
  const response = await api.get<{ results: QuizResponse[] }>(import.meta.env.VITE_QUIZ_URL);
  return response.data;
};
