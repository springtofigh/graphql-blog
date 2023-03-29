import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Card from '@mui/material/Card';
import Loader from '../shared/Loader';



const CardAuthor = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  console.log(data);
  const {authors} = data;
  console.log(authors);

  

  if (loading) return <Loader />;

  if (errors) return <h3>Error...</h3>;

  return (
    <Card sx={{ maxWidth: 345 , boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
    {/* <CardActionArea>
      <CardMedia component="img" height="200" width="200" image={avatar.url} alt="profile"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                حوزه فعالیت: {field}
        </Typography>
      </CardContent>
    </CardActionArea> */}
  </Card>
  )
}

export default CardAuthor