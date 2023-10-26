import { Link } from "@remix-run/react";
import { newDate } from "~/helpers/getData";

const Post = ({ post }) => {
  const { content, title, url, postImage, publishedAt } = post;
  return (
    <article className="post">
      <img
        src={postImage.data.attributes.formats.small.url}
        alt={`imgane blog ${title}`}
        className="imagen"
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{newDate(publishedAt)}</p>
        <p className="summary">{content}</p>
        <Link className="enlace" to={`/posts/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
};

export default Post;
