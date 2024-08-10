import React, { useState } from 'react'

function UseKonusu() {
    const [name , setname] = useState('Emre');
    function ad () {
        setname('Deniz')
    }
    return (
        <div>{name}
        <div>
            <button onClick={(e) => {
                e.preventDefault();
                ad();
            }}>İsmi Değiştir</button>
            </div>
            </div>
    )
}

export default UseKonusu