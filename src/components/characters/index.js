import React,{useEffect, useState} from 'react';
import axios from 'axios'

const Characters = () => {
    const [charas, setCharas] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getCharacters = () => {
        axios({
            method:'get',
            url: 'http://hp-api.herokuapp.com/api/characters'
        }).then(res =>{
            setCharas(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            getCharacters()
        }, 2000)
    })

    if(isLoading){
        return(<p>Chargement en cours</p>)
    }

    return (
        <div>
    <p>Liste</p>
    {charas[0] ? charas.map(chara => {
        return <p key={chara.name}>{chara.name}</p>
    }) : <div><p>Pas de personnages dispo </p>
    <button onClick={getCharacters}>Retry</button>   
    </div>
}
        </div>
    );
};



export default Characters;