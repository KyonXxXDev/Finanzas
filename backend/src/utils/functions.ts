import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './config.ts';

export async function hashPassword({ password }: { password: string }): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePassword({ password, hash }: { password: string, hash: string }): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
}

export async function generateToken({ payload }: { payload: Record<string, unknown> }): Promise<string> {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  return token;
}