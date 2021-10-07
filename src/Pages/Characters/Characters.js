import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Characters.css";

const Characters = () => {
  const [page, setPage] = useState();
  const [content, setContent] = useState([]);

  const fetchCharacters = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
   // console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
      fetchCharacters();
  });

  return (
    <div>
      <span className="pageTitle">Discover Characters ...</span>

      <div className="characters">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              image={c.image}
              title={c.type || c.name}
              date={c.created }
              status={c.status}
              gender={c.gender}
              species={c.species}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Characters;
