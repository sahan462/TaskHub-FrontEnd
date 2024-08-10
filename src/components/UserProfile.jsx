import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar, Button, Breadcrumbs, Link, LinearProgress, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Person, Web, GitHub, Twitter, Instagram, Facebook } from '@mui/icons-material';

export const UserProfile = () => {
  return (
    <section className="bg-gray-100 py-5">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb" className="p-3 bg-white rounded-md mb-4">
              <Link underline="hover" color="inherit" href="#">
                <Home />
              </Link>
              <Link underline="hover" color="inherit" href="#">
                User
              </Link>
              <Typography color="textPrimary">User Profile</Typography>
            </Breadcrumbs>
          </Grid>

          <Grid item lg={4}>
            <Card className="mb-4">
              <CardContent className="text-center">
                <Avatar
                  alt="avatar"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  sx={{ width: 150, height: 150, margin: 'auto' }}
                />
                <Typography variant="h6" className="mt-3">
                  Full Stack Developer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Bay Area, San Francisco, CA
                </Typography>
                <div className="flex justify-center mt-4">
                  <Button variant="contained" className="mr-2">
                    Follow
                  </Button>
                  <Button variant="outlined">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="p-0">
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Web className="text-yellow-500" />
                    </ListItemIcon>
                    <ListItemText primary="https://mdbootstrap.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHub className="text-gray-800" />
                    </ListItemIcon>
                    <ListItemText primary="mdbootstrap" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Twitter className="text-blue-400" />
                    </ListItemIcon>
                    <ListItemText primary="@mdbootstrap" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Instagram className="text-pink-500" />
                    </ListItemIcon>
                    <ListItemText primary="mdbootstrap" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Facebook className="text-blue-600" />
                    </ListItemIcon>
                    <ListItemText primary="mdbootstrap" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={8}>
            <Card className="mb-4">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1" fontWeight="bold">
                      Full Name
                    </Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="textSecondary">
                      Johnatan Smith
                    </Typography>
                  </Grid>
                </Grid>
                <hr className="my-4" />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1" fontWeight="bold">
                      Email
                    </Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="textSecondary">
                      example@example.com
                    </Typography>
                  </Grid>
                </Grid>
                <hr className="my-4" />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1" fontWeight="bold">
                      Phone
                    </Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="textSecondary">
                      (097) 234-5678
                    </Typography>
                  </Grid>
                </Grid>
                <hr className="my-4" />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1" fontWeight="bold">
                      Mobile
                    </Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="textSecondary">
                      (098) 765-4321
                    </Typography>
                  </Grid>
                </Grid>
                <hr className="my-4" />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1" fontWeight="bold">
                      Address
                    </Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="textSecondary">
                      Bay Area, San Francisco, CA
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Grid container spacing={2}>
              <Grid item md={6}>
                <Card className="mb-4">
                  <CardContent>
                    <Typography variant="body2" className="mb-4 text-primary">
                      <span className="italic">Assignment</span> Project Status
                    </Typography>
                    <Typography variant="body2" className="mb-1">
                      Web Design
                    </Typography>
                    <LinearProgress variant="determinate" value={80} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Website Markup
                    </Typography>
                    <LinearProgress variant="determinate" value={72} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      One Page
                    </Typography>
                    <LinearProgress variant="determinate" value={89} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Mobile Template
                    </Typography>
                    <LinearProgress variant="determinate" value={55} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Backend API
                    </Typography>
                    <LinearProgress variant="determinate" value={66} className="rounded" />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={6}>
                <Card className="mb-4">
                  <CardContent>
                    <Typography variant="body2" className="mb-4 text-primary">
                      <span className="italic">Assignment</span> Project Status
                    </Typography>
                    <Typography variant="body2" className="mb-1">
                      Web Design
                    </Typography>
                    <LinearProgress variant="determinate" value={80} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Website Markup
                    </Typography>
                    <LinearProgress variant="determinate" value={72} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      One Page
                    </Typography>
                    <LinearProgress variant="determinate" value={89} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Mobile Template
                    </Typography>
                    <LinearProgress variant="determinate" value={55} className="rounded" />

                    <Typography variant="body2" className="mt-4 mb-1">
                      Backend API
                    </Typography>
                    <LinearProgress variant="determinate" value={66} className="rounded" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
