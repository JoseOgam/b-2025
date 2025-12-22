import { connect } from "@/dbConfig/mongodb";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sendEmail } from "@/utils/sendEmail";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //  let check if user exist
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        error: "user already exist",
        status: 400,
      });
    }

    //   hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save user to database

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const saveUser = await newUser.save();

    // console.log(saveUser);
    try {
      await sendEmail({
        to: saveUser.email,
        subject: "Welcome! Account ceated 🎉",
        html: `
      <h2>Welcome ${saveUser.username}</h2>
      <p>Your account was created successfully.</p>
    `,
      });
    } catch (emailError) {
      console.error("EMAIL FAILED:", emailError);
    }

    return NextResponse.json({
      message: "user created successfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
