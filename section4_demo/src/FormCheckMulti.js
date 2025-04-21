import { useState } from 'react';

export default function FormCheckMulti() {
    const [form, setForm] = useState({
        animal: ['dog', 'cat']
    })

    const handleForm = (e) => {
        const animals = form.animal
        if (e.target.checked) {
            animals.push(e.target.value);
        } else {
            animals.splice(animals.indexOf(e.target.value),1);
        }
        setForm({...form, [e.target.name]: animals});
    };


    const show = () => {
        console.log(`animals: ${form.animal}`);
    } 

    return (
        <form>
            <fieldset>
                <legend>好きな動物：</legend>
                <label htmlFor='animal_dog'>犬</label>
                <input type='checkbox' name='animal' checked={form.animal.includes('dog')} onChange={handleForm} value='dog' />
                <label htmlFor='animal_cat'>猫</label>
                <input type='checkbox' name='animal' checked={form.animal.includes('cat')} onChange={handleForm} value='cat' />
                <label htmlFor='animal_elephant'>ゾウ</label>
                <input type='checkbox' name='animal' checked={form.animal.includes('elephant')} onChange={handleForm} value='elephant' />
            </fieldset>
            <button type='button' onClick={show} >送信</button>
        </form>
    )
}