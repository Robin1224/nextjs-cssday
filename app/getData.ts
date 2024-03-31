"use server"

export async function getData() {

  const res = await fetch('https://cssday.nl/data.json');
  const data = await res.json();


  const filteredData = data[queryYear];

  console.log(data);

  return Response.json(filteredData);
  // query is "hello" for /api/search?query=hello
}