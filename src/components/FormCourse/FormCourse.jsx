import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonCancel,
  ButtonDel,
  UlHorAgg,
  ButtonSave,
  ContendDiv,
  ButtonAgg,
  Div,
  DivInput,
  FormContent,
  Input,
  InputFile,
  Select,
  DivButtonsNextPreview,
  ButtonNextPreview,
  DivInputsHor,
  DivHor
} from "./FormCourseStyle";
import { useForm } from "react-hook-form";
import { createData, updateData } from "../../store/courses/courseActions";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { searchCourseById } from "../../store/courses/courseSlice";
import Swal from "sweetalert2";
import uploadFile from "../../services/fileUpload";
import SaveImage from "../../assets/save.png";

function FormCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const rutaActual = location.pathname;
  const { id } = useParams();
  const [horarios, setHorarios] = useState([]);
  const [poblacion, setPoblacion] = useState([]);
  const [nuevaPoblacion, setNuevaPoblacion] = useState("");
  const [nuevoHorario, setNuevoHorario] = useState({
    day: "",
    init: "",
    end: "",
  });
  const dispatch = useDispatch();
  const [section, setSection] = useState(1);

  const nextSection = (e) => {
    e.preventDefault();
    setSection(section + 1);
  };

  const prevSection = (e) => {
    e.preventDefault();
    setSection(section - 1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/gestionCursos");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoHorario({ ...nuevoHorario, [name]: value });
  };

  const handleInputPoblacion = (e) => {
    const { value } = e.target;
    setNuevaPoblacion(value);
  };

  const agregarPoblacion = (e) => {
    e.preventDefault();
    if (nuevaPoblacion) {
      setPoblacion([...poblacion, nuevaPoblacion]);
      setNuevaPoblacion("");
    }
  };
  const deletePoblacion = (e, index) => {
    e.preventDefault();
    const nuevaMatriz = poblacion.filter((_, i) => i !== index);
    setPoblacion(nuevaMatriz);
  };

  const agregarHorario = (e) => {
    e.preventDefault();
    if (nuevoHorario.day && nuevoHorario.init && nuevoHorario.end) {
      setHorarios([...horarios, nuevoHorario]);
      setNuevoHorario({ day: "", init: "", end: "" });
    }
  };

  const deleteHorario = (e, index) => {
    e.preventDefault();
    const nuevaMatriz = horarios.filter((_, i) => i !== index);
    setHorarios(nuevaMatriz);
  };

  const { register, handleSubmit, setValue } = useForm();

  const [confirmingSave, setConfirmingSave] = useState(false);

  const handleConfirmSave = () => {
    setConfirmingSave(true);
  };
  const searchedCourse = useSelector((state) => state.course.searchedCourse);

  const handleSave = async (data) => {
    try {
      const confirmSave = await Swal.fire({
        title: "¿Guardar curso?",
        text: "¿Estás seguro de que deseas guardar este curso?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, guardar",
        onClose: () => setConfirmingSave(false),
      });

      if (!confirmSave.isConfirmed) {
        return;
      }
      if (data.image.length > 0) {
        const photo = await uploadFile(data.image[0]);
        data = {
          ...data,
          dates: {
            date_init: data.date_init,
            date_end: data.date_end,
            date_enrollment: data.date_enrollment,
          },
          timetables: horarios,
          target_population: poblacion,
          photo,
        };
      } else {
        data = {
          ...data,
          dates: {
            date_init: data.date_init,
            date_end: data.date_end,
            date_enrollment: data.date_enrollment,
          },
          timetables: horarios,
          target_population: poblacion,
          photo:
            searchedCourse && searchedCourse.photo ? searchedCourse.photo : "",
        };
      }

      delete data.date_init;
      delete data.date_end;
      delete data.date_enrollment;
      delete data.image;
      if (rutaActual.includes("/EditarCurso")) {
        data = { ...data, id: id };
        dispatch(updateData(data));
        navigate("/gestionCursos");
      } else {
        dispatch(createData(data));
        navigate("/gestionCursos");
      }

      await Swal.fire({
        title: "Guardado",
        text: "El curso ha sido guardado correctamente.",
        icon: "success",
      });
      console.info("Curso guardado correctamente");
    } catch (error) {
      console.error("Error al guardar el curso:", error);
      await Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error al intentar guardar el curso.",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (rutaActual.includes("/EditarCurso")) {
      dispatch(searchCourseById(id));
    }
  }, [rutaActual, dispatch, id]);

  useEffect(() => {
    if (rutaActual.includes("/EditarCurso")) {
      if (
        searchedCourse &&
        searchedCourse.timetables &&
        searchedCourse.target_population
      ) {
        setHorarios(searchedCourse.timetables);
        setValue("name", searchedCourse.name);
        setValue("description", searchedCourse.description);
        setValue("type_pay", searchedCourse.type_pay);
        setValue("entity", searchedCourse.entity);
        setValue("date_init", searchedCourse.dates.date_init);
        setValue("intensity", searchedCourse.intensity);
        setPoblacion(searchedCourse.target_population);
        setValue("category", searchedCourse.category);
        setValue("quotas", searchedCourse.quotas);
        setValue("cost", searchedCourse.cost);
        setValue("date_end", searchedCourse.dates.date_end);
        setValue("modality", searchedCourse.modality);
        setValue("date_enrollment", searchedCourse.dates.date_enrollment);
        setValue("teacher", searchedCourse.teacher);
      }
    }
  }, [searchedCourse, setValue]);

  return (
    <FormContent onSubmit={handleSubmit(handleSave)}>
      <ContendDiv active={section === 1}>
        <Div>
          <h3>Nombre del Curso</h3>
          <Input type="text" {...register("name")} placeholder="Tu respuesta" />
        </Div>
        <Div>
          <h3>Descripción</h3>
          <Input type="text" {...register("description")} />
        </Div>
        <Div>
          <h3>Tipo de pago</h3>
          <Select {...register("type_pay")}>
            <option value="">Seleccione un tipo de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia PSE">Transferencia PSE</option>
          </Select>
        </Div>
        <Div>
          <h3>Unidad académica</h3>
          <Input type="text" {...register("entity")} />
        </Div>
        <DivButtonsNextPreview>
          <ButtonNextPreview onClick={nextSection}>Siguiente</ButtonNextPreview>
        </DivButtonsNextPreview>
      </ContendDiv>
      <ContendDiv active={section === 2}>
        <Div>
          <h3>Fecha de inicio</h3>
          <Input type="date" {...register("date_init")} />
        </Div>
        <Div>
          <h3>Intensidad</h3>
          <Input type="text" {...register("intensity")} />
        </Div>
        <Div>
          <h3>Limite de cupos</h3>
          <Input type="number" {...register("quotas")} />
        </Div>
        <Div>
          <h3>Seleciona una Imagen</h3>
          <InputFile type="file" {...register("image")} />
        </Div>
        <DivButtonsNextPreview>
          <ButtonNextPreview onClick={prevSection}>Anterior</ButtonNextPreview>
          <ButtonNextPreview onClick={nextSection}>Siguiente</ButtonNextPreview>
        </DivButtonsNextPreview>
      </ContendDiv>
      <ContendDiv active={section === 3}>
        <DivHor>
          <h3>Horarios</h3>
          <DivInputsHor>
            <label htmlFor="day">Día de la Semana:</label>
            <Select
              id="day"
              name="day"
              value={nuevoHorario.day}
              onChange={handleInputChange}
            >
              <option value=""> Seleccione un dia </option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sabado</option>
            </Select>
          </DivInputsHor>
          <DivInputsHor>
            <label htmlFor="init">Hora inicio:</label>
            <Input
              type="time"
              id="init"
              name="init"
              value={nuevoHorario.init}
              onChange={handleInputChange}
            />
          </DivInputsHor>
          <DivInputsHor>
            <label htmlFor="end">Hora fin:</label>
            <Input
              type="time"
              id="end"
              name="end"
              value={nuevoHorario.end}
              onChange={handleInputChange}
            />
          </DivInputsHor>
          <ButtonAgg onClick={agregarHorario}>Agregar Horario</ButtonAgg>
          {horarios.length > 0 ? <h3>Horarios Agregados:</h3> : <></>}
          <UlHorAgg>
            {horarios.map((horario, index) => (
              <li key={index}>
                <p>
                  Día: {horario.day}, Horario: {horario.init} - {horario.end}
                </p>
                <ButtonDel
                  onClick={(e) => {
                    deleteHorario(e, index);
                  }}
                >
                  X
                </ButtonDel>
              </li>
            ))}
          </UlHorAgg>
        </DivHor>
        <Div>
          <h4>Poblacion Objetivo</h4>
          <DivInput>
            <label htmlFor="day">Tipo de Población</label>
            <Input
              type="text"
              value={nuevaPoblacion}
              onChange={handleInputPoblacion}
            />
          </DivInput>
          <ButtonAgg onClick={agregarPoblacion}>Agregar Población</ButtonAgg>
          {poblacion.length > 0 ? <h4>Poblacion Objetivo Agregada:</h4> : <></>}
          <UlHorAgg>
            {poblacion.map((element, index) => (
              <li key={index}>
                <p>{element}</p>
                <ButtonDel
                  onClick={(e) => {
                    deletePoblacion(e, index);
                  }}
                >
                  X
                </ButtonDel>
              </li>
            ))}
          </UlHorAgg>
        </Div>
        <DivButtonsNextPreview>
          <ButtonNextPreview onClick={prevSection}>Anterior</ButtonNextPreview>
          <ButtonNextPreview onClick={nextSection}>Siguiente</ButtonNextPreview>
        </DivButtonsNextPreview>
      </ContendDiv>
      <ContendDiv active={section === 4}>
        <Div>
          <h3>Categoria</h3>
          <Input type="text" {...register("category")} />
        </Div>
        <Div>
          <h3>Costo de inversion</h3>
          <Input type="text" {...register("cost")} />
        </Div>
        <Div>
          <h3>Fecha de fin</h3>
          <Input type="date" {...register("date_end")} />
        </Div>
        <Div>
          <h3>Modalidad del Curso</h3>
          <Select {...register("modality")}>
            <option value="">Seleccione la modalidad</option>
            <option value="Virtual">Virtual</option>
            <option value="Presencial">Presencial</option>
            <option value="Hibrido">Hibrido</option>
          </Select>
        </Div>
        <DivButtonsNextPreview>
          <ButtonNextPreview onClick={prevSection}>Anterior</ButtonNextPreview>
          <ButtonNextPreview onClick={nextSection}>Siguiente</ButtonNextPreview>
        </DivButtonsNextPreview>
      </ContendDiv>
      <ContendDiv active={section === 5}>
        <Div>
          <h3>Fecha de cierre de inscripciones</h3>
          <Input type="date" {...register("date_enrollment")} />
        </Div>
        <Div>
          <h3>Docente</h3>
          <Input type="text" {...register("teacher")} />
        </Div>
        <DivButtonsNextPreview>
          <ButtonNextPreview onClick={prevSection}>Anterior</ButtonNextPreview>
          <ButtonSave type="submit">
            <img src={SaveImage} alt="" />
            <p>Guardar</p>
          </ButtonSave>
        </DivButtonsNextPreview>
      </ContendDiv>
    </FormContent>
  );
}

export default FormCourse;
