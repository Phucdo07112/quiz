//todo
import {db} from "@/lib/db";
import {User, currentUser} from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const user:User | null = await currentUser();

        if(!user){
            return new NextResponse("Please login to access this resources!", {
                status: 400,
            })
        }

        //todo --- we need to check the user have any shop or not
        const questions = await db.questions.findMany();

        return NextResponse.json({user,questions});
        
    } catch (error) {
        console.log('load user error', error);
        return new NextResponse("Interval Error", {status: 500})
        
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        //todo --- we need to check the user have any shop or not
        const questions = await db.questions.create({
            data
        });

        return NextResponse.json(questions);
        
    } catch (error) {
        console.log('load user error', error);
        return new NextResponse("Interval Error", {status: 500})
        
    }
}