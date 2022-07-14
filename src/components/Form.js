import {useEffect, useState} from 'react'
function Form({contact, setContact}) {

    const [form, setForm] = useState({fullname: "", phone:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {

        if (form.fullname === "" || form.phone === "") {
            return false
        }

        setContact([...contact , form])
    }
    useEffect(() => {
        setForm({fullname:"",phone:""})
    },[contact])

    return(
    <>
        <section>
            <div className="container mx-auto pt-8" >
                <div className='grid justify-center' >
                    <div className='pb-4'>
                        <label>Per. Full Name :
                            <input placeholder="Full Name" name="fullname" className="border-solid border-2 border-sky-300 rounded-md" value={form.fullname} onChange={onChangeInput} />
                        </label>
                    </div>
                    <div className='pb-4'>
                        <label>Phone Number :
                            <input placeholder="Phone Number" name="phone" className="border-solid border-2 border-sky-300 rounded-md" value={form.phone} onChange={onChangeInput}  />
                        </label>
                    </div>
                </div>
                <div>
                    <button onClick={onSubmit} className="block bg-blue-300 p-2 rounded-md w-[300px] mx-auto">Add Contact</button>
                </div>
            </div>
        </section>
    </>
    )
}

export default Form