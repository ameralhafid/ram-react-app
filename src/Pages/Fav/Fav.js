import "./Fav.css";
import React, {useEffect, useState} from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import axios from "axios";


const Fav = () => {

    let fav = JSON.parse(localStorage.getItem('fav'));

    const [content, setContent] = useState([]);
    const fetchFav = async () => {
        const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/${fav}`
        );
        setContent(data);
    };

    useEffect(() => {
        fetchFav();
    });

    return (

    <div>
        <span className="pageTitle">Favourites Characters ...</span>

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
    </div>
    );
};
export default Fav;

