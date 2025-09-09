import Jobs from "@/models/jobsModel";
import { connect } from "@/dbConfig/mongodb";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      id,
      title,
      company,
      location,
      type,
      salary,
      responsibilities,
      requirements,
      benefits,
    } = reqBody;

    //   check if job exist
    const job = await Jobs.findOne({ title });
    if (job) {
      return NextResponse.json({ error: "job already exist" }, { status: 400 });
    }
    //   save job to database

    const newJob = new Jobs({
      id,
      title,
      company,
      location,
      type,
      salary,
      responsibilities,
      requirements,
      benefits,
    });

    const saveJob = await newJob.save();

    return NextResponse.json({
      message: "Job created successfully",
      success: true,
      saveJob,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
