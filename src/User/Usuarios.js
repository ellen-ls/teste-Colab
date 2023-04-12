import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const User = ()=>{

    const [listaUsuarios, setListaUsuarios] = useState([])
    
    
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=50')
        .then((response)=>{
            setListaUsuarios(response.data.results)
        })
    },[])

    console.log(listaUsuarios)

return(
    <div>
        <h1>Usuarios</h1>

        
        {listaUsuarios.map((lista, index)=>{
            return <div key={index}>
                <img src={lista.picture.large}></img>
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