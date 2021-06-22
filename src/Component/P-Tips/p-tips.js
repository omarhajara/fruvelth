import React from 'react';
import {Link} from 'react-router-dom'
import './p-tips.scss';



const Tips = () => (
    <div className='tips'>
        <h2>Pregnancy Tips</h2>
        <p>
            Nulla vitae elit libero, a pharetra augue
            mollis interdum. Nulla vitae elit libero, a pharetra augue
            mollis interdum. Nulla vitae elit libero, a pharetra augue
            mollis interdum. Nulla vitae elit libero, a pharetra augue
            mollis interdum. Nulla vitae elit libero, a pharetra augue
            mollis interdum.
        </p>
        <button><Link> Learn More</Link></button>
    </div>
)

export default Tips;