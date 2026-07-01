import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get('secret');

    if (secret !== 'mySuperSecretLongStringForRevalidation123456789') {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    (revalidateTag as any)('page');
    (revalidateTag as any)('footer');
    return NextResponse.json({ revalidated: true, now: Date.now() });
}