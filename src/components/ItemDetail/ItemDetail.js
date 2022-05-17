import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function ItemDetail({product}) {

  return (
    <>
 <Card sx={{ display: 'flex', width:"80%", height: "100%", marginTop:"3%", marginLeft: "10%", backgroundColor:"#000" }}>
    <CardMedia component="img" sx={{ margin: "5%", width: 400 }} image={product.pictureUrl} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{width: "100%"}}>
          <Typography sx={{display: "flex", justifyContent: "flex-end", color: "#94ff8f"}} component="div" variant="h5">
            {product.title}
          </Typography>
          <Typography sx={{display: "flex", justifyContent: "flex-end", color: "#94ff8f"}} variant="subtitle1" color="text.secondary" component="div">
            {product.description}
          </Typography>
          <Typography sx={{display: "flex", justifyContent: "flex-end", color: "#94ff8f"}} variant="subtitle1" color="text.secondary" component="div">
            ${product.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </>
  )
}

export default ItemDetail