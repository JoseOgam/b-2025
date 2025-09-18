import Applicants from "@/models/applicantModel";
import { connect } from "@/dbConfig/mongodb";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, jobTitle, email, resume } = reqBody;

    //   save application to the DB
    const newApplication = new Applicants({ name, jobTitle, email, resume });
    const saveApplication = await newApplication.save();
    return NextResponse.json({
      message: "application successful",
      success: true,
      saveApplication,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
