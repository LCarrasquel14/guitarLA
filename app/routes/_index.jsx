import { useLoaderData } from "@remix-run/react";
import { getData } from "~/helpers/getData";
import { getPost } from "~/helpers/getData";
import { getInfo } from "~/helpers/getData";
import GuitarsList from "~/components/guitarList";
import Curso from "~/components/curso";
import BlogList from "~/components/blogList";
import guitarStyles from "~/styles/guitar.css";
import blogStyles from "~/styles/blog.css";
import cursoStyles from "~/styles/curso.css";
export function meta() {}

export function links() {
  return [
    { rel: "stylesheet", href: guitarStyles },
    {
      rel: "stylesheet",
      href: blogStyles,
    },
    {
      rel: "stylesheet",
      href: cursoStyles,
    },
  ];
}

export async function loader() {
  const [guitars, posts, curso] = await Promise.all([
    getData(`${process.env.API_URL}/guitars?populate=*`),
    getPost(),
    getInfo("curso"),
  ]);
  return { guitars, posts, curso };
}
const Index = () => {
  const datos = useLoaderData();
  const guitarsData = datos.guitars.data;
  const posts = datos.posts.data;
  const curso = datos.curso.data;
  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitarsData} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="container">
        <BlogList posts={posts} />
      </section>
    </>
  );
};

export default Index;
