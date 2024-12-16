import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
}

// async function authenticateUser(
//   email: string,
//   password: string
// ): Promise<User | null> {
//   if (email === "test@example.com" && password === "password123") {
//     return { id: "123", email }; // Return the user object on successful authentication
//   }
//   return null; // Return null if authentication fails
// }

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: (credentials) => {
        const user: User = { id: "123", email: credentials.email as string };

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        // user = await authenticateUser(credentials.email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
