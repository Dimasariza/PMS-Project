import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
    pages : {
        signIn : "/"
    },
    session : {
        strategy : "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    secret : process.env.NEXTAUTH_SECRET,
    jwt : {
        maxAge: 60 * 60 * 24 * 30,
    },
    providers : [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            type: "credentials",

            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },

            async authorize(credentials, req) { 

                // Add logic here to look up the user from the credentials supplied
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                const url = process.env.NEXT_PUBLIC_API_URL + "/auth/login" 
                
                const result = await axios.post(url, {...credentials});
                
                let user = result.data.data

                user = {
                    name : user.fullname,
                    ...user
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // return new Error('Invalid User')
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    callbacks : {
        async session({session, token}) {
            session.user = token
            axios.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;  
            return session
        },
        async jwt({token, account, user}) {
            return {...token, ...account, ...user}
        },
    },
})