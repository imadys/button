import { useEffect, useState } from 'react'
import Button from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faHome, faXmark, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {

    return (
        // Settings:

        <div className='h-screen flex justify-center items-center'>
            <div className="card">
                <div className="flex items-center justify-center gap-3">
                    <Button color="primary" size="lg" rounded={true} outline={true}>Primary</Button>
                    <Button color="secondary" size="lg" rounded={true} outline={true}>Secondary</Button>
                    <Button color="info" size="lg" rounded={true} outline={true}>Info</Button>
                    <Button color="warning" size="lg" rounded={true} outline={true}>Warning</Button>
                    <Button color="danger" size="lg" rounded={true} outline={true}>Danger</Button>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                    <Button color="primary" size='sm' rounded={true}>Button</Button>
                    <Button color="secondary" size="md" rounded={true}>Button</Button>
                    <Button color="info" size="lg" rounded={true}>Button</Button>
                    <Button color="warning" size="xl" rounded={true}>Button</Button>
                    <Button color="danger" size="xl" rounded={true}>Button</Button>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5">
                    <Button color="primary" size="lg" rounded={true} setIcon={{ icon: <FontAwesomeIcon icon={faHome} />, direction: 'left' }}>
                        Button with icon
                    </Button>
                    <Button disabled={true} color="secondary" size="lg" rounded={true} setIcon={{ icon: <FontAwesomeIcon icon={faXmark} />, direction: 'right' }}>
                        Disabled Button
                    </Button>
                    <Button click={() => { alert('its working!') }} color="danger" size="lg" rounded={true} setIcon={{ icon: <FontAwesomeIcon icon={faBell} />, direction: 'right' }}>
                        Button with event
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default App
