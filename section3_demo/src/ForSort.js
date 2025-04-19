import React from "react";
export default function ForSort({ src }) {
  src.sort((a, b) => a.price - b.price);

  return (
    <dl>
      {src.map((book) => (
        <React.Fragment key={book.isbn}>
          {console.log(book.isbn)}
          {console.log(book.price)}

          <dt>
            <a
              href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}
            >
              {book.title} {book.price}円
            </a>
          </dt>
          <dd>{book.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
