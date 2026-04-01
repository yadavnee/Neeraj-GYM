"use server";
import prisma from "./prisma";
import { cookies } from "next/headers";

export async function registerUser(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const name = data.get("name") as string;

  if (!email || !password) return { error: "Email and password required" };

  try {
    const user = await prisma.user.create({
      data: { email, password, name } // In production, hash the password
    });
    
    const cookieStore = await cookies();
    cookieStore.set("session", user.id, { httpOnly: true, secure: true });
    return { success: true, user };
  } catch (e) {
    return { error: "Registration failed. User may exist." };
  }
}

export async function loginUser(data: FormData) {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.password !== password) return { error: "Invalid credentials" };

  const cookieStore = await cookies();
  cookieStore.set("session", user.id, { httpOnly: true, secure: true });
  return { success: true, user };
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  return { success: true };
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) return null;
  return await prisma.user.findUnique({ where: { id: sessionId } });
}

export async function bookSession(data: FormData) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) return { error: "Unauthorized" };

  const className = data.get("className") as string;
  const dateStr = data.get("date") as string;

  try {
    const booking = await prisma.booking.create({
      data: {
        userId: sessionId,
        className,
        date: new Date(dateStr)
      }
    });
    return { success: true, booking };
  } catch (e) {
    return { error: "Failed to book session" };
  }
}
