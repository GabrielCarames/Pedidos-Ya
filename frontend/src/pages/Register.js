
import useFormHelper from '../hooks/useFormHelper';
import '../css/pages/register/Register.css'

const Register = () => {
  const [handleChange, handleSubmit] = useFormHelper()

    return (
      <div className="Register-container">
        <div className="Register-outside">
          <h1>Registrate</h1>
         
          <h3>¿Ya tienes una cuenta? <a>Inicia sesión aquí</a></h3>
          <div className="SocialMedia-buttons">
            <button className="Facebook-button"><i className="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;Facebook</button>
            <button className="Google-button"><i className="fab fa-google"></i>&nbsp;&nbsp;&nbsp;&nbsp;Google</button>
            <button className="Instagram-button"><i className="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;Instagram</button>
          </div>
        </div>
        <div className="Register-inside">
          <h2>También puedes registrarte con teléfono</h2>
          <form className="Register-form" onSubmit={handleSubmit}>
            <div className="Input-names">
                <input className="Name" placeholder="Nombres" type="text" name="names" onChange={handleChange} required></input>
                <input className="Surname" placeholder="Apellidos" type="text" name="surnames" onChange={handleChange} required></input>
            </div>
            <div className="Input-password">
                <input placeholder="Contraseña" type="password" name="password" onChange={handleChange} required></input>
            </div>
            <div className="Input-email">
                <input placeholder="Email" type="email" name="email" onChange={handleChange} required></input>
            </div>
            <div className="Input-number">
                <input placeholder="Número de celular" name="celnumber" onChange={handleChange} required></input>
            </div>
            <button type="submit" className="Register-button">Registrarme</button>
        </form>
        </div>
      </div>
    );
}

export default Register;
