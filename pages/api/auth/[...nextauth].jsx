import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../lib/prisma'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const dbUser = await prisma.users.findUnique({
                    where: {
                        username: credentials.username
                    }
                });

                if(dbUser) {
                    if(dbUser.password == credentials.password) {
                        return {
                            name: dbUser.username
                        };
                    }
                } 
                return null;
            }
        })
    ],
    pages: {
        signIn: "/sign_in"
    },
    secret: "adjaskdjlkas"
}

export default NextAuth(authOptions);