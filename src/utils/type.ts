export type UserInfoFormate = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  file: string;
};

export type UserDataList = {
  userList: Omit<UserInfoFormate, "confirmPassword">[];
};

export type inputFieldListValues = {
  name: string;
  type: string;
  title: string;
  placeHolder: string;
  value: string;
  errorString: string | null;
}[];
