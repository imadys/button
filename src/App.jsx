import { useEffect, useState } from 'react'
import Button from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faHome, faXmark, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function submitForm(e) {
        e.preventDefault();
        alert("name:" + name + ',' + "email:" + email);
    }

    return (
        // Settings:
        <div className='h-screen flex justify-center items-center'>
            <div className="card">
                <div className="flex items-center justify-center gap-3">
                    <Button color="primary" size="lg" rounded={true} outline={true}>Primary</Button>
                    <Button color="secondary" size="lg" rounded={true} outline={true}>Secondary</Button>
                    <Button color="success" size="lg" rounded={true} outline={true}>Success</Button>
                    <Button color="info" size="lg" rounded={true} outline={true}>Info</Button>
                    <Button color="warning" size="lg" rounded={true} outline={true}>Warning</Button>
                    <Button color="danger" size="lg" rounded={true} outline={true}>Danger</Button>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                    <Button color="primary" size='xs' rounded={true}>XS</Button>
                    <Button color="secondary" size="sm" rounded={true}>SM</Button>
                    <Button color="success" size='md' rounded={true}>MD</Button>
                    <Button color="warning" rounded={true}>Default</Button>
                    <Button color="info" size="lg" rounded={true}>LG</Button>
                    <Button color="danger" size="xl" rounded={true}>XL</Button>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                    <Button color="primary" size="lg" rounded={true} icon={<FontAwesomeIcon icon={faHome} />} iconDirection="left" >
                        Button with icon
                    </Button>
                    <Button color="warning" size="lg" rounded={true} icon={<FontAwesomeIcon icon={faHome} />} iconDirection="right" >
                        Button with icon
                    </Button>
                    <Button disabled color="secondary" size="lg" rounded={true} icon={<FontAwesomeIcon icon={faXmark} />} iconDirection="left">
                        Disabled Button
                    </Button>
                    <Button onClick={() => { alert('Hello world!') }} color="danger" size="lg" rounded={true}>
                        Button with event
                    </Button>
                </div>
                <div className="mt-5 mx-auto flex items-center justify-center">
                    <Button autofocus="autofocus" color="info" size="lg" rounded={true} outline={true}>
                        Autofocused
                    </Button>
                </div>
                <div className='mt-5 w-64 mx-auto'>
                    <form onSubmit={submitForm} className='flex items-center flex-col justify-center gap-3'>
                        <h1 className='text-lg font-bold'>Contact Form</h1>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className='w-full h-8 bg-gray-200 rounded-lg px-3' placeholder='Your name' />
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} className='w-full h-8 bg-gray-200 rounded-lg px-3' placeholder='Your Email' />
                        <Button type="submit" color="success" className="w-full" rounded={true}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default App
