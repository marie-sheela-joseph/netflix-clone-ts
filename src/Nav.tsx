import { useEffect, useState } from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom'
function Nav() {
    const [show, setShow] = useState(false);
    const history = useNavigate()
    function transitionNavBar() {
        let res = window.scrollY > 100 ? true : false;
        setShow(res)
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`} >
            <div className='nav__content'>
                <img src='./assets/logo.png' alt='netflix logo' className='nav__logo' onClick={() => { history('/') }} />
                <img src='./assets/avatar.png' alt='netflix avatar' className='nav__avatar' onClick={() => { history('/profile') }} />
            </div>
        </div >
    )
}

export default Nav