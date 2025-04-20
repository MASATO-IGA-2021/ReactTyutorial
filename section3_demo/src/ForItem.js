export default function ForItem({ item }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${item.isbn}/${item.isbn}.jpg`}>
          {item.title} {item.price}円
        </a>
        <dd>{item.summary}</dd>
      </dt>
    </>
  );
}
