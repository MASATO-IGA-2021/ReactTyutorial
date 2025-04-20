import { useState } from 'react';
export default function FormTextarea() {
    //Stateを初期化
    const [form, setForm] = useState({
        comment: '様々なフォーム要素を・・・'
    });

    //テキストエリアの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`コメント：${form.comment}`);
    };

    return (
        <form>
            <label htmlFor='comment'>コメント：</label><br />
            <textarea id='comment' name='comment' value={form.comment} cols={30} rows={7} onChange={handleForm} /><br />
            <button type='button' onClick={show} >送信</button>
        </form>
    )
}