import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        {
          error: "unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return NextResponse.json(
      {
        id: decoded._id,
        username: decoded.username,
        email: decoded.email,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
