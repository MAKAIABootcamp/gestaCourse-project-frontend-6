import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Students, ButtonChange } from './StudentsForCourseStyle';
import { getDataEnrollment, updateDataEnrollment, getDataStudentsInfo } from '../../store/enrollment/enrollmentActions';
import { getStudents, setStudents } from '../../store/enrollment/enrollmentSlice';

export default function StudentsForCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students, studentsInfo } = useSelector((store) => store.enrollment);
  const [stateStudent, setStateStudent] = useState([]);
  const [nameStudent, setNameStudent] = useState([]);
  const states = [
    "Pendiente",
    "Aprobado",
    "Rechazado",
    "Por revisar",
    "Revisado",
    "Certificado",
  ];
  useEffect(() => {
    const hiddenDateStudents = async () => {
      try {
        await dispatch(getDataEnrollment());
        await dispatch(getDataStudentsInfo());
        dispatch(getStudents(id));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    hiddenDateStudents();
  }, [dispatch, id]);

  useEffect(()=>{
    if (students.length > 0) {
      setStateStudent(students.map(student => student.state));
    }
  }, [students]);

  useEffect(()=>{
    if (studentsInfo.length > 0){
      setNameStudent(studentsInfo.map(student => student.fullName));
    }
  }, [studentsInfo]);

  const handleChangeEstado = (index, newState) => {
    let stateStudentNew = [...stateStudent];
    stateStudentNew[index] = newState;
    setStateStudent(stateStudentNew);
  };

  const handleGuardarAccion = async (id, index, stateAct) => {
    if(stateAct === stateStudent[index]){
      Swal.fire({
        icon: 'info',
        title: 'Estado igual',
        text: 'El estado seleccionado es el mismo que el actual.',
      });
    } else {
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
    }
  };

  if (!students || !studentsInfo || students.length === 0 || studentsInfo.length === 0) {
    return <div>No hay estudiantes para mostrar.</div>;
  }  

  return (
    <Students>
      <h2>Tabla de Estudiantes</h2>
      <div>
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
                <td>{nameStudent[index]}</td>
                <td>{estudiante.state}</td>
                <td>
                  <select
                    value={stateStudent[index]}
                    onChange={(e) => handleChangeEstado(index, e.target.value)}
                  >
                    {
                      states.map((state, index)=>(
                        <option key={`${index}${state}`} value={state}>{state}</option>
                      ))
                    }
                  </select>
                </td>
                <td>
                  <ButtonChange onClick={() => handleGuardarAccion(estudiante.id, index, estudiante.state)}>Cambiar</ButtonChange>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Students>
  );
}
