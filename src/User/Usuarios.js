import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"



const User = ()=>{

    const [listaUsuarios, setListaUsuarios] = useState([])
    const [activeLink, setActiveLink] = useState(0)
    
    
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

    const icons = [
        ' fas fa-user fa-2x',
        ' fas fa-envelope fa-2x',
        ' fas fa-calendar-alt fa-2x',
        ' fas fa-map-marker fa-2x',
        ' fas fa-phone fa-2x',
        ' fas fa-lock fa-2x'
    ]

    const GeradorFrases = ({user}) =>{
        const frases = [
            `Hi my name is ${user.name.first} ${user.name.last}`,
            `My email address is ${user.email}`,
            `My birthday is ${user.dob.date.slice(0,10)} `,
            `My address is ${user.location.street.name}, ${user.location.street.number}`,
            `My phone number is ${user.phone}`,
            `My password is ${user.login.password}`
        ]
        return<h2>{frases[activeLink]}</h2>
    }

    const activeLinkHandle = (index)=>{
     setActiveLink(index)

    }

return(
    <div>
        <h1>Usuarios</h1>

        
        {listaUsuarios && listaUsuarios.map((lista, index)=>{
            return <div key={index}>
                <img src={lista.picture.large}></img>
                <button value={listaUsuarios} onClick={onClick}>New</button>
                <GeradorFrases user={lista}/>            
                <div className="app--icons">
                    {icons.map((icon,index)=>{
                        return(
                            <i className={icon} key={index} onMouseEnter={()=>activeLinkHandle(index)}></i>

                        )
                    })}
                                       
                    
                </div>
            </div>
        })}
    </div>


)
}


export default User