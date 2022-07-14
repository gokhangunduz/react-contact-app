import {useState} from 'react'
function Form() {

    const [form, setForm] = useState({fullname: "", phone:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {
        console.log(form)
    }

    return(
    <>
        <section>
            <div className="container mx-auto" >
                <div>
                    <div>
                        <label>Full Name:
                            <input placeholder="Full Name" name="fullname" className="border-solid border-2 border-sky-500 rounded-md" onChange={onChangeInput} />
                        </label>
                    </div>
                    <div>
                        <label>Phone Number:
                            <input placeholder="Phone Number" name="phone" className="border-solid border-2 border-sky-500 rounded-md" onChange={onChangeInput}  />
                        </label>
                    </div>
                </div>
                <div>
                    <button onClick={onSubmit} className="bg-blue-300 p-2 rounded-md">Add Contact</button>
                </div>
            </div>
        </section>
    </>
    )
}

export default Form