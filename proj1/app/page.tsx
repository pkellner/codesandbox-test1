"use client";

type Message = string;

export default async function PAGE(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return (
    <div>
      Hello CodeSandBox!!!! <h1>HI</h1>
    </div>
  );
}
