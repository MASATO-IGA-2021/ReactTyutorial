export default function EventBasic(type) {
  //clickのイベントハンドラー
  const current = () => {
    console.log("処理開始");
    const d = new Date();
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
    }
  };
  return (
    <div>
      <button onClick={current}>現在時刻取得</button>
    </div>
  );
}
