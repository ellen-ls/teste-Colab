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
            `Hi, my name is `,
            `My email address is `,
            `My birthday is `,
            `My address is `,
            `My phone number is `,
            `My password is `
        ]
        const info = [
            `${user.name.first} ${user.name.last}`,
            `${user.email}`,
            `${user.dob.date.slice(0,10)} `,
            `${user.location.street.name}, ${user.location.street.number}`,
            `${user.phone}`,
            `${user.login.password}`

    

            
        ]

        return<div>
            <p id="user_titulo">{frases[activeLink]}</p>
            <h3 id="user_valor">{info[activeLink]}</h3>
            </div>

       
    }

    const activeLinkHandle = (index)=>{
     setActiveLink(index)

    }

return(
    <div className="card">
        <div className="detalhes">
               
        {listaUsuarios && listaUsuarios.map((lista, index)=>{
            return <div key={index}>
                <img className="user_foto" id="user_foto" src={lista.picture.large}></img>
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
</div>  

)
}


export default User