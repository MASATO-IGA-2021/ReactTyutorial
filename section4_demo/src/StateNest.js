import { use, useState } from 'react';

export default function StateNest() {
    //入れ子の配列をStateとして宣言
    const [form, setForm] = useState({
        name:'山崎賢人',
        address: {
            prefecture: '東京都',
            city: '江戸川区'
        }
    });
    //1段目のState更新
    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    //2段目のState更新
    const handleForm2 = (e) => {
        setForm({
            ...form,
            address:{
                ...form.address,
                [e.target.name]: e.target.value
            }
        });
    };
    const show = () => {
        console.log(`名前: ${form.name}, 都道府県: ${form.address.prefecture}, 市町村: ${form.address.city}`)
    }
    return (
        <form>
            <div>
                <label htmlFor='form'>名前：</label>
                <input type='text' value={form.name} onChange={handleForm} name='name'></input>
            </div>
            <div>
                <label htmlFor='form'>県：</label>
                <input type='text' value={form.address.prefecture} onChange={handleForm2} name='prefecture'></input>
            </div>
            <div>
                <label htmlFor='form'>市/区/町村：</label>
                <input type='text' value={form.address.city} onChange={handleForm2} name='city'></input>
            </div>
            <button type='button' onClick={show}>送信</button>
        </form>
    )
};