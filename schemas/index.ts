import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
    password: z.string().min(1, {
        'message' : 'Password is required!'
    })
});

export const RegisterSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
    name: z.string().min(1, {
        'message' : 'Name is required!'
    }),
    password: z.string().min(8, {
        'message' : 'Password must be at least 8 characters!'
    })
});
