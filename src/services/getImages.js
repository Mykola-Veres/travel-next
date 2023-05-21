export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) {
    // return { notFound: true };
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
