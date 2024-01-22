import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Students } from './StudentsForCourseStyle';
import { getDataEnrollment } from '../../store/enrollment/enrollmentActions';
import { getStudents } from '../../store/enrollment/enrollmentSlice';

export default function StudentsForCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students } = useSelector((store) => store.enrollment);

  useEffect(() => {
    dispatch(getDataEnrollment());
  }, []);

  useEffect(()=> {
    dispatch(getStudents(id));
  },[dispatch,id])


  const handleChangeEstado = (id, nuevoEstado) => {
    // Implement your logic here
    console.log(`Changing state for student with ID ${id} to ${nuevoEstado}`);
  };

  const handleGuardarAccion = (id) => {
    // Implement your logic here
    console.log(`Guardando acción para el estudiante con ID ${id}`);
  };

  return (
    <Students>
      <h2>Tabla de Estudiantes</h2>
      <table>
        <thead>
          <tr>
            <th>Id de Estudiantes</th>
            <th>Nombre Completo</th>
            <th>Estado de la Solicitud</th>
            <th colSpan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((estudiante) => (
            <tr key={estudiante.Id_student}>
              <td>{estudiante.Id_student}</td>
              <td>{estudiante.id}</td>
              <td>{estudiante.state}</td>
              <td>
                <select
                  value={estudiante.state}
                  onChange={(e) => handleChangeEstado(estudiante.id, e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Aprobado">Aprobado</option>
                  <option value="Rechazado">Rechazado</option>
                  <option value="Por revisar">Por Revisar</option>
                  <option value="Revisado">Revisado</option>
                  <option value="Certificado">Certificado</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleGuardarAccion(estudiante.id)}>Guardar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Students>
  );
}
