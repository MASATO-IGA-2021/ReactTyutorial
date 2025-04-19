import React from "react";
export default function ForFilter({ src }) {
  const highPrice = src.filter((item) => item.price > 3500);
  return (
    <dl>
      {highPrice.map((item) => (
        <React.Fragment key={item.isbn}>
          {console.log(item.isbn)}
          {console.log(item.price)}

          <dt>
            <a
              href={`https://wings.msn.to/books/${item.isbn}/${item.isbn}.jpg`}
            >
              {item.title} {item.price}円
            </a>
          </dt>
          <dd>{item.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
