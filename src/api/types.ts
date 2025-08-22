// @ts-ignore
enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface RegisterData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber?: string;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface MySelfResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  role: UserRoleEnum;
}

export interface PaginationParams {
  order: OrderType;
  page: number;
  take: number;
}

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface PaginationMeta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: string;
  pageCount: number;
  take: string;
}

export interface ProductsResponse {
  category: string;
  createdAt: Date;
  deletedAt: Date | null;
  name: string;
  id: string;
  updatedAt: Date;
  price: number;
}

export interface ProductsCreate {
  name: string;
  price: number;
  category: string;
}

export type User = MySelfResponse;

export interface ProductsUpdate {
  name?: string;
  price?: number;
  category?: string;
}

export interface UserUpdate {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface QuizResponse {
  type: string; 
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

