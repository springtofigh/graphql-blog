import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;

  const {author: { name, field, avatar, description, posts }} = data;

  return (
    <Container maxWidth="lg">
      <div style={{marginTop: "60px"}}>
        <div style={{display: "flex", justifyContent:"flex-end"}}>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </div>
      <Grid container>
      {/* AUTHOR FIELD */}
        <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        {/* AUTHOR DESCRIPTION */}
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        {/* AUTHOR ARTICLE */}
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}

export default AuthorPage;
