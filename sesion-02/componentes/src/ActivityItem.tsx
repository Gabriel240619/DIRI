interface ActivityItemProps {
    valorAlt: string;
    nombreImagen: string;
    tiempo: string;
    descripcion: string;
}


export default function ActivityItem({valorAlt, nombreImagen, tiempo, descripcion}: ActivityItemProps) {
    return(
        <div className="item">
            <div className="avatar">
                <img
                    alt={valorAlt}
                    src={`/images/${nombreImagen}.jpg`}
                />
            </div>

            <span className="time">{tiempo}</span>

            <p>{descripcion}</p>
        </div>
    );
}