
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useState, useEffect } from 'react';

import { Box, styled } from '@mui/material';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const StyledBanner = styled('img')({
    width:'100%'
});

const Banner = ({ movies }) => {

    return(

        
        <Box style={{width:'65%'}}>
            <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            >
                {
                    movies.map(movie => (
                        <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner"/>
                    ))
                }
            </Carousel>
        </Box>

    );
}

export default Banner; 