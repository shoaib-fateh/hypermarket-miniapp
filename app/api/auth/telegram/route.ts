import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Your Telegram bot token (replace with your actual token)
const TELEGRAM_BOT_TOKEN = '7867055702:AAELt8PitYd4bfG64SIL6GXmgLwh9m2c4rE';

const checkSignature = (data: any, token: string) => {
  // Check the integrity of the data received from Telegram using the hash
  const str = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n');
  const hash = crypto.createHmac('sha256', token).update(str).digest('hex');
  return hash === data.hash;
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const data = Object.fromEntries(url.searchParams);

  // Check signature
  if (!checkSignature(data, TELEGRAM_BOT_TOKEN)) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  // Extract user info
  const user = {
    id: data.id,
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,  // Optional, if the user shared their phone
    photo_url: data.photo_url,
    auth_date: data.auth_date,
  };

  // Here, you can store user info in cookies, JWT, or just return the data
  // For simplicity, we'll just return the user data

  return NextResponse.json({ user });
}
