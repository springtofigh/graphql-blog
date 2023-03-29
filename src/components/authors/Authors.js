import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";
import { Typography , CardActionArea , Card , CardContent , CardMedia } from "@mui/material";
import { Link } from "react-router-dom";


import Loader from "../shared/Loader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;


  return (
    <Container maxWidth="lg" style={{ height: "1000px"}}> 
      <Grid container spacing={2} padding={3}>
      {data.authors.map((author) => (
        <Grid item xs={12} sm={6} md={3} mt={4} key={author.id}>
          <Card sx={{ maxWidth: 345 , height: "300px" , boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
    <CardActionArea>
      <CardMedia component="img" height="200" width="200" image={author.avatar.url} alt="profile"/>
      <CardContent>
      <Link to={`/authors/${author.slug}`} style={{ textDecoration: "none"}} >
        <Typography gutterBottom variant="h5" component="div">
        {author.name}
        </Typography>
      </Link>
      </CardContent>
    </CardActionArea>
  </Card>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default Authors