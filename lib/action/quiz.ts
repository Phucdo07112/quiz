"use server";

import { User, currentUser } from "@clerk/nextjs/server";
import { db } from "../db";

// create a new order
export const getQuiz = async () => {
  try {
        //todo --- we need to check the user have any shop or not
        const questions = await db.questions.findMany();
        console.log('questions',questions);
        
        return questions;
  } catch (error) {
    console.log(error);
  }
};
