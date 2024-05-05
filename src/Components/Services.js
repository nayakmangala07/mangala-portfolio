import React from 'react';
import { Grid, Container } from '@material-ui/core';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';

const service = [
  {
    name: 'Web Development',
    desc: "I'll develop website tailored to your specifications!",
    img: laptop,
  },
  {
    name: 'Customized Portraits | Paintings',
    desc: "Gifting portraits or sketches can be a wonderful way to make your friend feel truly cherished on their special occasions. I'd be delighted to create them for you!",
    img: illustration,
  },
];

const Services = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='services'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>Services</span>
            </h2>

          <hr className="line-tittle" />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent='center'>
          {service.map((item, index) => (
            <Grid item lg={4} xs={12} className='about' key={index}>
              <Grid container justifyContent='center'>
                <div
                  className='medsos'
                  style={{ margin: '1rem 0', height: '5rem', width: '5rem' }}
                >
                  <img src={item.img} alt='profil' width='90%' />
                </div>
              </Grid>

              <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                {item.name}
              </h4>

              <p style={{ textAlign: 'center', padding: '0 1rem' }}>
                {item.desc}
              </p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Services;
