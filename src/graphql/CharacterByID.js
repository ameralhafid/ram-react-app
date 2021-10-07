import gql from 'graphql-tag';

export const CharByIdQuery = gql`
    query GetCharacter($id: ID!){
  character(id: $id){
    id
  name
  status
  species
  type
  gender
  origin{
    name

  }
  location{
    name

  }
  image
   episode{
   id
   name}
}
    }
    `;
