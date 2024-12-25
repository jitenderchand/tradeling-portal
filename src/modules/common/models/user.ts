import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

export interface IRole {
  id: number;
  name: string;
}

export interface IUser extends AdapterUser {
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
  roles: IRole[];
  permissions: string[];
}

export interface ISession extends DefaultSession {
  accessToken?: string | null;
  refreshToken?: string | null;
  roles?: IRole[] | null;
  permissions?: string[] | null;
}

export interface IToken extends JWT {
  accessToken?: string | null;
  refreshToken?: string | null;
  roles?: IRole[] | null;
  permissions?: string[] | null;
}
