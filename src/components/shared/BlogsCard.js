import React from "react";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function BlogsCard({ title, slug, coverPhoto , author}) {

    return (
        <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
                <Link to={`/authors/${author.slug}`} key={author.id} style={{ textDecoration: "none", width: "100%" }}>
                    <CardHeader avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
                    title={
                        <Typography component="p" variant="p" color="text.secondary">
                            {author.name}
                        </Typography>
                    }
                />
                </Link>
            {/* Article Image */}
            <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} />
            {/* Article Title */}
            <CardContent>
                <Typography component="h3" variant="h6" color="text.primary" fontWeight={600} sx={{ height: "100px" }}>
                    {title}
                </Typography>
            </CardContent>

            <Divider variant="middle" sx={{ margin: "10px" }} />

            {/* Read Article Button */}
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
                    <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
                        مطالعه مقاله
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default BlogsCard;
