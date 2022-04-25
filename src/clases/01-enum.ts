export enum Roles {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string;
  role: Roles;
};

// const nicoUser: User = { username: "Gabriel", role: Roles.ADMIN };

