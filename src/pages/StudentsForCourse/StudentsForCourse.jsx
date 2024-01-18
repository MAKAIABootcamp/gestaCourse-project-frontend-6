import { React, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function StudentsForCourse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [estudiantes, setEstudiantes] = useState([
        { id: 1, nombre: 'Juan Pérez', estadoSolicitud: 'Pendiente' },
        // Agregar más estudiantes según sea necesario
    ]);
    
    const handleChangeEstado = (id, nuevoEstado) => {
        setEstudiantes(prevEstudiantes => prevEstudiantes.map(estudiante => 
            estudiante.id === id ? { ...estudiante, estadoSolicitud: nuevoEstado } : estudiante
        ));
    };
    
    const handleGuardarAccion = (id) => {
        // Aquí puedes implementar la lógica para guardar la acción en tu backend
        console.log(`Guardando acción para el estudiante con ID ${id}`);
    };
    
    return (
        <div>
            <h2>Tabla de Estudiantes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id de Estudiantes</th>
                        <th>Nombre Completo</th>
                        <th>Estado de la Solicitud</th>
                        <th>Acciones</th>
                        <th>Botón de Guardar Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map(estudiante => (
                        <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.estadoSolicitud}</td>
                            <td>
                                <select
                                    value={estudiante.estadoSolicitud}
                                    onChange={(e) => handleChangeEstado(estudiante.id, e.target.value)}
                                >
                                    <option value="pendiente">Pendiente</option>
                                    <option value="aprobado">Aprobado</option>
                                    <option value="rechazado">Rechazado</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleGuardarAccion(estudiante.id)}>Guardar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
