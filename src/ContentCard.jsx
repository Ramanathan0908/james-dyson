import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ContentCard() {
    return (
        <Box display="flex" gap="48px">
            <Card sx={{ maxWidth: '400px', maxHeight: '300px' }}>
                <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    Plastic
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    You saved $69 by recycling plastic!
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: '400px', maxHeight: '300px' }}>
                <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    Metal cans
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    You saved $4.20 by recycling metal cans!
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: '400px', maxHeight: '300px' }}>
                <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    Paper
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    You saved $6.90 by recycling Paper!
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: '400px', maxHeight: '300px' }}>
                <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                    Glass
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    You saved $5.70 by recycling Glass!
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}