import React from "react";
//書籍情報をPropsで受け取る
export default function ForList({ targets }) {
  return (
    <dl>
      {targets.map((book) => (
        <React.Fragment key={book.isbn}>
          {console.log(book.isbn)}
          {console.log(book.price)}

          <dt>
            <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
              {book.title} {book.price}円
            </a>
          </dt>
          <dd>{book.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
