import { NextPage } from "next";
import { useRouter } from "next/router";

export default function Dynamic() {
  const { asPath, pathname, query, push, replace } = useRouter();
  console.log("asPath", asPath);
  console.log("pathname", pathname);
  console.log("query", query.id);
  console.log("push", push);
  console.log("replace", replace);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Dynamic Page by idid</div>
      <button
        onClick={() => {
          push("/");
        }}
      >
        go Home
      </button>
      <button
        onClick={() => {
          replace("/");
        }}
      >
        go Home
      </button>
    </section>
  );
}
