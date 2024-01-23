import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Students } from './StudentsForCourseStyle';
import { getDataEnrollment, updateDataEnrollment, getNameStudent } from '../../store/enrollment/enrollmentActions';
import { getStudents, setStudents } from '../../store/enrollment/enrollmentSlice';

export default function StudentsForCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students } = useSelector((store) => store.enrollment);
  const [stateStudent, setStateStudent] = useState([]);

  useEffect(() => {
    dispatch(getDataEnrollment());  
  }, []);

  useEffect(()=> {
    dispatch(getStudents(id));
  },[dispatch,id])

  useEffect(()=>{
    setStateStudent(students.map(student => student.state));
  }, [students]);

  const handleChangeEstado = (index, newState) => {
    let stateStudentNew = [...stateStudent];
    stateStudentNew[index] = newState;
    setStateStudent(stateStudentNew);
  };

  const handleGuardarAccion = async (id, index) => {
    const result = await Swal.fire({
      title: 'Confirmar',
      text: '¿Estás seguro de que deseas cambiar el estado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const enrollmentToUpdate = students.find(enrollment => enrollment.id === id);
      if (enrollmentToUpdate) {
        const updatedEnrollment = { ...enrollmentToUpdate, state: stateStudent[index] };
        dispatch(updateDataEnrollment(updatedEnrollment));
        Swal.fire({
          icon: 'success',
          title: 'Actualización exitosa',
          text: 'La información se ha actualizado correctamente.',
        });
        const updatedStudents = students.map((student) =>
          student.id === id ? { ...student, state: stateStudent[index] } : student
        );
        dispatch(setStudents(updatedStudents));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se encontró la información para actualizar.',
        });
      }
    }
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
          {students.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.Id_student}</td>
              <td>{estudiante.id}</td>
              <td>{estudiante.state}</td>
              <td>
                <select
                  value={stateStudent[index]}
                  onChange={(e) => handleChangeEstado(index, e.target.value)}
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
                <button onClick={() => handleGuardarAccion(estudiante.id, index)}>Guardar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Students>
  );
}
