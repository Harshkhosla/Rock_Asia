import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}  ClassName="mx-4"
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent style={{margin:'23px'}}>
        
        <Typography variant="h5" component="div"  className="fs-4" >
        Our Vision
        </Typography>
        
        <Typography variant="body2 fs-6">
        To provide best in class affordable customised flooring & Interior solutions with Marble & Granite fusion for modern nature friendly living.
          <br />
     
        </Typography>
      </CardContent>
     
    </React.Fragment>
  );
  export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}


