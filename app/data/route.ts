import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryYear = searchParams.get('year');

  const res = await fetch('https://cssday.nl/data.json');
  const data = await res.json();

  if (!queryYear) {
    return Response.json(data);
  }
  const filteredData = data[queryYear];

  console.log(data);

  return Response.json(filteredData);
  // query is "hello" for /api/search?query=hello
}