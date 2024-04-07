"use server";
import { LoginSchema, RegisterSchema } from "@/schemas";
import * as z from "zod";

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

    return {success: "Verification link sent to your email address!"};
}
