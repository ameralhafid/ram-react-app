import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import WithoutPic from "../../components/SingleContent/WithoutPic";

const Episodes = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchEpisodes = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/?page=${page}`
    );
    setContent(data.results);
    // console.log(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchEpisodes();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Discover Epiosdes ...</span>
      
      <div className="characters">
        {content &&
          content.map((c) => (
            <WithoutPic
              key={c.id}
              id={c.id}
              name={c.name}
              air_date={c.air_date}
              episode={c.episode}
            />
          ))}
      </div>
      
        <CustomPagination setPage={setPage} numOfPages={3} />
      
    </div>
  );
};

export default Episodes;
