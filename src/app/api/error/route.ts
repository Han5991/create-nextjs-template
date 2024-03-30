import {HttpStatusCode} from 'axios';
import {NextResponse} from 'next/server';

export const GET = async () =>
  NextResponse.json(
    {test: 'error'},
    {
      status: HttpStatusCode.Unauthorized,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
