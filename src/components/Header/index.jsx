import React from 'react';
import config from '../../../config.json'

import { StyledHeader } from './styles';

function Header() {
return (
    <StyledHeader>
        <section className='user-info'>
            <img src={`https://github.com/${config.github}.png`} alt="img perfil" />
            
            <div>
                <h2>
                    {config.name}
                </h2>
                <p>
                    {config.job}
                </p>
            </div>

        </section>
    </StyledHeader>
    )
}

export default Header;