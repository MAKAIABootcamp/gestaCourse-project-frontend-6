import React, { useState } from "react";
import {
  Title,
  StylesPrincipal,
  Search,
  Lupa,
  Input,
  DivCards,
  Cards,
  CardImg,
  ImgCard,
  TitleCard,
  TextCard,
  BotonDetalles,
  Botones,
  BotonInscripcion,
} from "./StyleOfertasInscripciones";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/courses/courseActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { set } from "react-hook-form";
import ModalDetails from "../../components/ModalDetails/ModalDetails";

const OfertasInscripciones = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((store) => store.course);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleChange = (event) => {
        setSearch(event.target.value);
  }

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) =>
        course.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [courses, search]);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <StylesPrincipal>
      <Title>
        <h1>OFERTAS E INSCRIPCIONES</h1>
      </Title>
      <Search>
        <Lupa
          src="https://res.cloudinary.com/dbktnqag9/image/upload/v1703291402/DemoDay/lupa_m0jaag.png"
          alt="search"
        />
        <form>
          <Input
            type="text"
            id="buscar"
            name="buscar"
            placeholder="Buscar"
            value={search}
            onChange={handleChange}
          />
        </form>
      </Search>
      <DivCards>
        {filteredCourses.map((curso, index) => {
          return (
            <Cards key={index}>
              <CardImg>
                <ImgCard src={curso.photo} alt="course" />
              </CardImg>
              <div>
                <TitleCard>{curso.name}</TitleCard>
                <TextCard>
                  Costo: {curso.cost} <br />
                  <br />
                  Fecha de inicio: {curso.dates.date_init}
                  <br />
                  <br />
                  Fecha de finalización: {curso.dates.date_end}
                </TextCard>
              </div>
              <Botones>
                  <ModalDetails id={curso.id}/>
                <Link to={`/inscripcion/${curso.id}`}>
                  <BotonInscripcion type="submit">Inscribirse</BotonInscripcion>
                </Link>
                    
              </Botones>
            </Cards>
          );
        })}
      </DivCards>
    </StylesPrincipal>
  );
};

export default OfertasInscripciones;
