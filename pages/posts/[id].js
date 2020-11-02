import React from "react";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = () => {
  return {
    props: {},
    revalidate: 1800, // half an hour
  };
};

function Post() {
  const router = useRouter();

  console.log("-------------------------------------------------");
  console.log(router.query.id);
  console.log(router.isFallback);
  console.log("-------------------------------------------------");

  const blogPostNumber = router.query.id ? Number(router.query.id) + 10 : "";

  return <h1>Blog post number {blogPostNumber}</h1>;
}

export default Post;
