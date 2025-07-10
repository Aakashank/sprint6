import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard'
import Contact from './components/Contact';
import projects from './data/projects';

function App() {
  return (
    <>npm
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#f5f5f5', py: 4 }}>
        <Container>
          <Contact />
        </Container>
      </Box>
    </>
  );
}

export default App;
