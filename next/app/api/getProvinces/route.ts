import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://localhost:8000/api/getProvinces');
    if (!res.ok) {
      throw new Error(`Upstream responded with ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}