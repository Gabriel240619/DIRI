import ActivityItem from "./ActivityItem";

export default function Content() {
    return(
        <div className="content">
            <div className="line"></div>

            <ActivityItem
                valorAlt="Francisca"
                nombreImagen="francisca"
                tiempo="Hace una hora"
                descripcion="Fui a comer con amigos"
            />

            <ActivityItem
                valorAlt="Paco"
                nombreImagen="paco"
                tiempo="10:00 am"
                descripcion="Leí un artículo sobre tecnología"
            />

            <ActivityItem
                valorAlt="Quica"
                nombreImagen="quica"
                tiempo="10:00 am"
                descripcion="Escribí notas sobre un proyecto importante"
            />

            <ActivityItem
                valorAlt="Curro"
                nombreImagen="curro"
                tiempo="2:21 pm"
                descripcion="Prepararé la presentación para la reunión de mañana"
            />

        </div>
    );
}