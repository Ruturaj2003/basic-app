export const Book = (props) => {
  const { img, title, author, num } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <span className="number">{`# ${num + 1}`}</span>
    </article>
  );
};
