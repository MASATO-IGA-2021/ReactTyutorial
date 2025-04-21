import { useState } from 'react';

export default function FormCheck() {
    const [form, setForm] = useState({
        agreement: true
    })

    const handleForm = (e) => {
        setForm({...FormCheck, [e.target.name]: e.target.checked})
    };


    const show = () => {
        console.log(`agreement: ${form.agreement ? '賛成': '反対'}`);
    } 

    return (
        <form>
            <label htmlFor='agreement'>同意します</label>
            <input type='checkbox' name='agreement' checked={form.agreement} onChange={handleForm}/>
            <button type='button' onClick={show} >送信</button>
        </form>
    )
}