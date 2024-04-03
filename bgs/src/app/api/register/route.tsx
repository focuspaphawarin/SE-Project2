import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone_number: Joi.number().min(10).required(),
    address: Joi.string().required(),
    role: Joi.string().required()
});

export const dynamic = "force-dynamic";

export async function POST(req: { json: () => PromiseLike<{ username: any; email: any; password: any; phone_number: any; address: any; role: any; }> | { username: any; email: any; password: any; phone_number: any; address: any; role: any; }; }) {
  await connectToDB();

  const { username, email, password, phone_number, address, role } = await req.json();
  //validate the schema

  const { error } = schema.validate({ username, email, password, phone_number, address, role });

  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    //check if the user is exists or not

    const isUserAlreadyExists = await User.findOne({ email });

    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already exists. Please try with different email.",
      });
    } else {
      const hashPassword = await hash(password, 6);

      const newlyCreatedUser = await User.create({
        username,
        email,
        password: hashPassword,
        phone_number,
        address,
        role,
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
  } catch (error) {
    console.log("Error while new user registration. Please try again");

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}