import './App.css'
import imagen from './assets/logo.png'

function App() {

  return (
    <>
      <div className="contenedor">
        <div className="content">
          <div>
            <h1 className="logo">
              <img src={imagen}></img>
            </h1>
          </div>
          <div className="titulo">
            <h1>UNDER CONSTRUCTION</h1>
          </div>
          <div className="descripcion">
            <p>
              ERB is an engineering company specialized in providing high availability telecommunications and cybersecurity solutions for OT telecontrol applications in industrial environments where production processes are critical.
            </p>
          </div>
          <div className="footer">
            Contact us: 
            <a href=""> erb_sales@ingenieriaerb.com</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
