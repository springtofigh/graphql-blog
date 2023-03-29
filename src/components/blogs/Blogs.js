import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";


const Blogs = () => {
    const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

    if (loading) return <Loader />;
  
    if (errors) return <h4>Error...</h4>;

  return (
    <Container maxWidth="lg"> 
        <Grid container spacing={2}>
        {data.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL {...post} />
            </Grid>
    ))}
    </Grid>
    </Container>
  )
}

export default Blogs;