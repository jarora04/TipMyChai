import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";


export const authOptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),  
    ],

    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider=="github")
        {
          //connect to database
          await connectDB()
          //chk if user already exist in the user base
          const currentUser=await User.findOne({email: email})
          if(!currentUser){

            const newUser= await User.create({
            email : user.email,
            username : user.email.split("@")[0],
            })
            
          }
        
          return true;
        }
      },
      async session({session, user, token}){
        const dbUser = await User.findOne({email: session.user.email})
        session.user.name=dbUser.username
        return session
      },
    }
  })
  export{authOptions as GET,authOptions as POST}