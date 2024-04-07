"use server";
import { LoginSchema, RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error : "Invalid crefentials!"}
    }

    return {success: "Login successful!"};
}

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error : "Invalid credentials!"}
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return {error: "User already exists!"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    //TODO: send verifiction email

    return {success: "Verification link sent to your email address!"};
}
