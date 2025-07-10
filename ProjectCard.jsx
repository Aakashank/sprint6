import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
