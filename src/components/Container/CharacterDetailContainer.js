import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {CharByIdQuery} from "../../graphql/CharacterByID";
import {CharacterByID} from "../../Pages/Details/CharacterDetail";
import {useParams} from 'react-router-dom';

export function CharacterDetailContainer() {
    let { id } = useParams();

    const { data } = useQuery(CharByIdQuery, {variables: {id}});
  return (
        <div className="character">
            {data && data.character &&
                 <CharacterByID key={data.character.id} character={data.character} />
            }
        </div>
  );
}
