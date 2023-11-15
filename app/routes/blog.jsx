import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/helpers/getData";
import BlogList from "~/components/blogList";
import styles from "~/styles/blog.css";
export function meta() {
  return [{ title: "GuitarLa - Blog" }];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export async function loader() {
  const post = await getPost();

  return post.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className="container">
      <BlogList posts={posts} />
    </main>
  );
};

export default Blog;
