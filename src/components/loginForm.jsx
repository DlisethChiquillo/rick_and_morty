import { useState } from "react"
import { validate } from "./validation"
import style from "./loginForms.module.css"

const Form = ({login}) => {
    const [ userData, setUserData ] = useState({
        username: '',
        password: ''
    })

    const [ errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (evento)=> {
        evento.preventDefault()
        login(userData)
    }
    const handleInputChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validate(
            {...userData, 
            [evento.target.name] : evento.target.value
            }))
    }

    return(
        <div className={style.formContainer}>
        <div className={style.formTitle}>
            <h1>Ingresa Tus Datos</h1>
</div>
            <form onSubmit={handleSubmit}>
                <div className={style.credentianls}>
                    <label >Email:            </label>
                    <input 
                        type="email" 
                        value={userData.username}
                        name="username"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                       errors.username ? (
                        <span>{errors.username}</span>
                       ) :
                       ''
                    }
                </div>
                <div className={style.credentianls}>
                    <label>Password:             </label>
                    <input 
                        type="password" 
                        value={userData.password}
                        name="password"
                        onChange={handleInputChange}
                    />
                    <br/>
                    {
                        errors.password ? (
                            <span>{errors.password}</span>
                        ) :
                        ''
                    }
                </div>
                <button type="submit" className={style.submitBtn}>Login</button>
            </form>
        </div>
        
    )
}

export default Form
