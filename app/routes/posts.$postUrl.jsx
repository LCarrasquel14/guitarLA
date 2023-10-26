import { useLoaderData } from "@remix-run/react";
import { getPostFilter, newDate } from "~/helpers/getData";
import styles from "~/styles/blog.css";
export function meta({ data }) {
  return [
    {
      title: `GuitarLA - ${data[0].attributes.title}`,
    },
  ];
}
export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPostFilter(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "informacion no encontrada",
    });
  }

  return post.data;
}
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Post = () => {
  const postFilter = useLoaderData();
  const { title, content, publishedAt, postImage } = postFilter[0].attributes;
  return (
    <main className="container publishing">
      <img src={postImage.data.attributes.url} alt={`imagen de${title}`} />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{`${newDate(publishedAt)}`}</p>
        <p className="text">{content}</p>
      </div>
    </main>
  );
};

export default Post;
