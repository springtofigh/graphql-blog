import React from 'react';
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Container, Grid } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Typography , CardActionArea , Card , CardContent , CardMedia } from "@mui/material";
import { Link } from "react-router-dom";


import Loader from "../shared/Loader";

const Authors = () => {
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;


  return (
    <Container maxWidth="lg" style={{ height: "1000px"}}> 
    <div style={{marginTop: "60px"}}>
        <div style={{display: "flex", justifyContent:"flex-end"}}>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </div>
      <Grid container spacing={2} padding={3}>
      {data.authors.map((author) => (
        <Grid item xs={12} sm={6} md={3} mt={2} key={author.id}>
          <Card sx={{ maxWidth: 345 , height: "300px" , boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
    <CardActionArea>
      <CardMedia component="img" height="160" width="160" image={author.avatar.url} alt="profile"/>
      <CardContent>
      <Link to={`/authors/${author.slug}`} style={{ textDecoration: "none"}} >
        <Typography gutterBottom variant="h6" component="div">
        {author.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                حوزه فعالیت: {author.field}
        </Typography>
      </Link>
      </CardContent>
    </CardActionArea>
  </Card>
        </Grid>
      ))}
      </Grid>
    </div>
    </Container>
  )
}

export default Authors