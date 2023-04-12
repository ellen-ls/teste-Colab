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

    </div>
)
}


export default User