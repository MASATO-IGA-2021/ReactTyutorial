let flag = false;
export default function ThrowPromise() {
  if (flag) {
    return <p>処理は成功しました。</p>;
  }
  throw new Promise((resolve, reject) => {
    //3000ミリ秒後に解決(resolve)処理
    setTimeout(() => {
      flag = true;
      resolve("Success!!!!!!!!!!!!!!");
    }, 3000);
  });
}
