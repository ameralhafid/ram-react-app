import gql from 'graphql-tag';

export const EPISODEBYID = gql`
query episode($id: ID!){
  episode(id: $id){
    id
  name
    air_date
  episode
    characters{
     id
      name}
    created
    
  }
    }
    `;