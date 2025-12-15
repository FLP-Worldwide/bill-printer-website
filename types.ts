export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  isVeg: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface StoreProfile {
  name: string;
  address: string;
  phone: string;
  gstin?: string; // Tax ID
  currency: string;
  footerMessage: string;
}

export interface Order {
  id: string;
  timestamp: number;
  items: CartItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMode: 'CASH' | 'UPI' | 'CARD';
}

export enum ViewState {
  LOGIN = 'LOGIN',
  SETUP = 'SETUP',
  POS = 'POS',
  MENU = 'MENU',
  ORDERS = 'ORDERS',
}
