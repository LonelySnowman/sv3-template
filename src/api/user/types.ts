export type LoginRequest = {
   username: string;
   password: string;
};

export type reLoginRequest = {
   accessToken: string;
};

export type LoginResponse = {
   username: string;
   roles: Array<string>;
   accessToken: string;
};
