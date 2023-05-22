export type UserInfoFormate = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  file: string;
};

export type UserInfo = {
  userInfo: UserInfoFormate[];
};

export type NewUser = {
  userInfo: Omit<UserInfoFormate, "confirmPassword">[];
};
