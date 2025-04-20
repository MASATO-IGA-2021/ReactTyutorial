import { useState } from "react";
export default function FormSelect() {
  //Stateを初期化
  const [form, setForm] = useState({
    animal: "dog",
  });


  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="comment">好きな動物を選んでください</label>
      <br />
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="monkey">サル</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
