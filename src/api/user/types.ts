export type LoginRequest = {
   username: string;
   password: string;
};

export type LoginResponse = {
   username: string;
   roles: Array<string>;
   accessToken: string;
};
