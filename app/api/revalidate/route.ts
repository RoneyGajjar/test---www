import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get('secret');

    // Security: Always use a secret token so only Sanity can trigger this
    if (secret !== '39g9tayz') {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // This matches the 'tag' used in your data fetching
    revalidateTag('page', 'cache');

    return NextResponse.json({ revalidated: true, now: Date.now() });
}