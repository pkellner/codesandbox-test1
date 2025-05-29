

import { use } from "react";

type Message = string;

export default function PAGE(props: { searchParams: Promise<Message> }) {
  const x = use(props.searchParams);
  console.log(x);
  return (
    <div>
      Hello CodeSandBox!!!! <h1>HI</h1>
    </div>
  );
}