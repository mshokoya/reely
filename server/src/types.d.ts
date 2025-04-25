export type User = {
  id: string;
  email: string;
  userType: ('manager' | 'tenant')[];
};
