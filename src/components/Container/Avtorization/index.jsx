import React from 'react';

function Avtorization(props) {
    return (
        <div className='auth-container'>
            <div>
                <input type="email" placeholder='example@memail.com'/>
            </div>
            <div>
                <input type="password" placeholder='ваш пароль'/>
            </div>
            <div>
                <button>
                    Войти
                </button>
            </div>
        </div>
    );
}

export default Avtorization;