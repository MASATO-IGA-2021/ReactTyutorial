import { useState } from "react";
export default function FormList() {
  //Stateを初期化
  const [form, setForm] = useState({
    animal: ["dog", "cat"],
  });


  const handleForm = (e) => {
    const data = [];
    const animals = e.target.options;
    for (const animal of animals)
        if (animal.selected) {
            data.push(animal.value)
        }
    setForm({
      ...form,
      [e.target.name]: data
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
        size={5}
        multiple={true}
        onChange={handleForm}
      >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="monkey">サル</option>
        <option value="rabbit">ウサギ</option>
        <option value="elephant">ゾウ</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
