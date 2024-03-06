import React from "react";
import GifContainer from "./GifContainer";
import { Box, Container, Typography } from '@mui/material';

export default function Header() {
    return (
        <Container>
            <Box sx={{
                backgroundColor: '#ffc0cb',
                minHeight: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography sx={{color: 'white', marginRight: 2}}>
                    Lorem ipsum
                </Typography>
                <GifContainer />
            </Box>
        </Container>
    )
}