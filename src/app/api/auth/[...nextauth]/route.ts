import { handlers } from "@/auth";
export const { GET, POST } = handlers;

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// interface Credentials {
//   email: string;
//   password: string;
// }

// interface User {
//   id: string;
//   email: string;
// }

// async function authenticateUser(
//   email: string,
//   password: string
// ): Promise<User | null> {
//   if (email === "test@example.com" && password === "password123") {
//     return { id: "123", email }; // Return the user object on successful authentication
//   }
//   return null; // Return null if authentication fails
// }

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: Credentials | undefined) {
//         if (!credentials?.email || !credentials?.password) {
//           return null; // If no credentials are provided, return null
//         }

//         const user = await authenticateUser(
//           credentials.email,
//           credentials.password
//         );

//         if (user) {
//           return user; // Return the user object
//         }

//         return null; // Return null if authentication fails
//       },
//     }),
//   ],
// });
