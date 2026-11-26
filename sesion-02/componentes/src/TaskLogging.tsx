import Header from './Header'
import Content from './Content'

export default function TaskLogging() {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        
        <section>
          <Header title="Registro de tareas" />
          <Content />
        </section>

        <section>
          <Header title="Perfil" />
        </section>

        <section>
          <Header title="Preferencias" />
        </section>

        <section>
          <Header title="Chat" />
        </section>

      </div>
    </div>
  );
}

