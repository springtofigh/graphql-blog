import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Components
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
          <Link to="/authors" style={{textDecoration:"none", color: "#000"}}>نویسندگان بوتوپت</Link>
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
          <Link to="/blogs" style={{textDecoration:"none", color: "#000"}}>
              مقالات
          </Link>
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
