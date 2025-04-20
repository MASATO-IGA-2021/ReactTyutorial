export default function TitledPanel2({ children }) {
  const style = {
    margin: 50,
    padding: 20,
    border: "1px solid #000",
    width: "it-content",
    boxShadow: "10px 5px 5px #999",
    backgroundColoer: "#fff",
  };
  const title = children.find(element => element.key === 'title');
  const body = children.find(element => element.key === 'body');
  return (
    <div style={style}>
      {title}
      <hr />
      {body}
    </div>
  );
}
