import React from 'react';
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BlogsCard from "../shared/BlogsCard";
import Loader from "../shared/Loader";


const Blogs = () => {
    const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
    const navigate = useNavigate();

    if (loading) return <Loader />;
  
    if (errors) return <h4>Error...</h4>;

  return (
    <Container maxWidth="lg"> 
    <div style={{marginTop: "60px"}}>
          <div style={{display: "flex", justifyContent:"flex-end"}}>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </div>
        <Grid container spacing={2} mt={2}>
        {data.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
                <BlogsCard {...post} />
            </Grid>
    ))}
    </Grid>
    </div>

    </Container>
  )
}

export default Blogs;
