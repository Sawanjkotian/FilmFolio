
import { styled, Typography } from '@mui/material';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const StyledBanner = styled('img')({
    width:'100%'
});


const Title = styled(Typography)`
    color: #FFFFFF;
    display: flex;
`;



const Slide = ({movies}) =>{

    return(
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            //showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            >
                {
                    movies.map(movie => (
                        <>
                        <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner"/>
                        <Title>{movie.original_title}</Title>
                        </>
                    ))
                }
            </Carousel>
    );
}

export default Slide;