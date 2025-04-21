import { useState } from "react";
export default function FormRadio() {
  //Stateを初期化
  const [form, setForm] = useState({
    os: "Windows",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`OS：${form.os}`);
  };

  return (
    <form>
      <fieldset>
        <legend>使用OS:</legend>
        <label htmlFor="os_win">Windows</label>
        <input
          type="radio"
          id="os_win"
          name="os"
          value="Windows"
          checked={form.os === "Windows"}
          onChange={handleForm}
        />
        <br />
      </fieldset>
      <fieldset>
        <label htmlFor="os_win">Mac</label>
        <input
          type="radio"
          id="os_mac"
          name="os"
          value="Mac"
          checked={form.os === "Mac"}
          onChange={handleForm}
        />
        <br />
      </fieldset>
      <fieldset>
        <label htmlFor="os_linux">Linux</label>
        <input
          type="radio"
          id="os_linux"
          name="os"
          value="Linux"
          checked={form.os === "Linux"}
          onChange={handleForm}
        />
        <br />
      </fieldset>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
