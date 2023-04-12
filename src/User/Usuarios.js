import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const User = ()=>{

    const [listaUsuarios, setListaUsuarios] = useState([])
    
    
    const user = ()=>{
        axios.get('https://randomuser.me/api/')
        .then((response)=>{
            setListaUsuarios(response.data.results)
        })
    }

    const onClick = () =>{
        user()
        setListaUsuarios()
    }

    useEffect(()=>{
        onClick()
    },[])

    console.log(listaUsuarios)

return(
    <div>
        <h1>Usuarios</h1>

        
        {listaUsuarios && listaUsuarios.map((lista, index)=>{
            return <div key={index}>
                <img src={lista.picture.large}></img>
                <button value={listaUsuarios} onClick={onClick}>New</button>
                <div>
                    <h4>Username: {lista.login.username}</h4>
                    <h4>Name: {lista.name.first} {lista.name.last}, {lista.dob.age}</h4>
                    <h4>Email: {lista.email}</h4>
                    
                </div>
            </div>
        })}
    </div>


)
}


export default User