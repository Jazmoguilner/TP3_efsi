import './App.css';

function App() {
  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <form>
            <label>Nombre Mascota</label>
            <input className="u-full-width" type="text" name="mascota" placeholder="Nombre Mascota" />
            <label>Nombre Dueño</label>
            <input className="u-full-width" type="text" name="propietario" placeholder="Nombre del dueño" />
            <label>Fecha</label>
            <input className="u-full-width" type="date" name="fecha" />
            <label>Hora</label>
            <input className="u-full-width" type="time" name="hora" />
            <label>Síntomas</label>
            <textarea className="u-full-width" name="sintomas" />
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
          </form>
        </div>

        <div className="one-half column">
          <h2>Administra tus citas</h2>

          <div className="cita">
            <p>Mascota: <span>Nina</span></p>
            <p>Dueño: <span>Martin</span></p>
            <p>Fecha: <span>2021-08-05</span></p>
            <p>Hora: <span>08:20</span></p>
            <p>Síntomas: <span>Le duele la pierna</span></p>
            <button className="button eliminar u-full-width">Eliminar ×</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
