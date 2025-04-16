import ForItem from "./ForItem";
export default function ForNest({ array }) {
  return (
    <dl>
      {array.map((item => 
        <ForItem item={item} key={item.isbn}></ForItem>
      ))}
    </dl>
  );
}
