import { connect } from "@/dbConfig/mongodb";
import User from "@/models/userModels";
import { NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {}
