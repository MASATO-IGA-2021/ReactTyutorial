import { useImmer } from 'use-immer';
export default function StateNestImmer2() {
    const [formImmer, setFormImmer] = useImmer({
            name:'山崎賢人',
            address: {
                prefecture: '東京都',
                city: '江戸川区'
            }
        });
    // 1段目の要素を更新するためのハンドラー
    const handleForm = (e) => {
        const ns = e.target.name.split('.');
        setFormImmer(formImmer => {
            if(ns.length === 1) {
                formImmer[ns[0]] = e.target.value;
            } else {
                formImmer[ns[0]][ns[1]] = e.target.value;
            }
        });
    }
    const show = () => {
        console.log(`名前: ${formImmer.name}, 都道府県: ${formImmer.address.prefecture}, 市町村: ${formImmer.address.city}`)
    }
    return (
        <form>
            <div>
                <label htmlFor='formImmer'>名前：</label>
                <input type='text' value={formImmer.name} onChange={handleForm} name='name'></input>
            </div>
            <div>
                <label htmlFor='formImmer'>県：</label>
                <input type='text' value={formImmer.address.prefecture} onChange={handleForm} name='address.prefecture'></input>
            </div>
            <div>
                <label htmlFor='formImmer'>市/区/町村：</label>
                <input type='text' value={formImmer.address.city} onChange={handleForm} name='address.city'></input>
            </div>
            <button type='button' onClick={show}>送信</button>
        </form>
    )
}