// import { getServerSideProps } from "@/pages";
// import { createClient } from "next-sanity";
// import React from "react";

// export default function Authordetail({author}) {
//     console.log(author)
//   return (
//   <>
//   </>);
// }

// export async function getServerSideProps() {
//   const client = createClient({
//     projectId: "9vl22nzn",
//     dataset: "production",
//     useCdn: false,
//   });
//   const query2 = `*[_type == 'author']`;
//   const authors = await client.fetch(query2);
//   console.log(authors);
//   return{
//     props: {
//         authors
//     },
//   };
// }
