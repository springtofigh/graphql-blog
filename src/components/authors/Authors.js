import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";
import { Typography , CardActionArea } from "@mui/material";



import CardAuthor from './CardAuthor';
import Loader from "../shared/Loader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;

  

  return (
    <Container maxWidth="lg"> 
      <Grid container spacing={2} padding={3}>
      {data.authors.map((author) => (
        <Grid item xs={12} md={3} mt={4} key={author.id}>
          <CardAuthor />
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default Authors