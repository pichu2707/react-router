import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log("Location: ", location);

    // Hacemos que haga una redirección pasado un tiempo en este caso 2 segundos
    // setTimeout(() => {
    //     navigate('/about')
    // }, 2000)
    
    return (
    <div>
        <Modal />
        <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
            <Link to="/card/alex" className='ui header'>Alex</Link>
            <p>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. 
                De la pradera ullamco qué dise usteer está la cosa muy malar. Lorem fistrum por la gloria de mi madre esse jarl 
                aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar. Lorem fistrum por la gloria 
                de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
        </div>
        <div className='ui raised very padded text container segment' style={{marginTop: '80px'}} >
            <Link to="/card/willma" className='ui header'>Willma</Link>
            <p>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. 
                De la pradera ullamco qué dise usteer está la cosa muy malar. Lorem fistrum por la gloria de mi madre esse jarl 
                aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar. Lorem fistrum por la gloria 
                de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
        </div>
        </div>
    );
}

export default Contact;