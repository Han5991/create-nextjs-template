import {HttpStatusCode} from 'axios';
import {NextResponse} from 'next/server';

export const GET = async () =>
  NextResponse.json(
    {test: 'ok'},
    {
      status: HttpStatusCode.Ok,
    },
  );
