import React from "react";
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

export default function KPI_cards() {
    return (
        <Container>
            <Box>
                <Card sx={{ maxWidth: 300 , marginBottom: 2}}>
                <CardContent>
                <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                    Card 1
                </Typography>
                <Typography component="div">
                    Lorem Ipsum
                </Typography>
                </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
                <CardContent>
                <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                    Card 2
                </Typography>
                <Typography component="div">
                    Lorem Ipsum
                </Typography>
                </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
                <CardContent>
                <Typography style={{color: '#bdbdbd'}}gutterBottom variant="h9" component="div">
                    Card 3
                </Typography>
                <Typography component="div">
                    Lorem Ipsum
                </Typography>
                </CardContent>
                </Card>
            </Box>
        </Container>
    );
  }
  