import React from 'react';

// {props.children} criada automaticamente pelo React para pegar filhos
function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;