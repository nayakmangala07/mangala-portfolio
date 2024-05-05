import React, { useEffect } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import painting1  from "../Images/portfolio/painting1.jpg";
import painting2  from "../Images/portfolio/painting2.jpg";
import painting3  from "../Images/portfolio/painting3.jpg";
import painting4  from "../Images/portfolio/painting4.jpg";
import painting5  from "../Images/portfolio/painting5.jpg";
import painting6  from "../Images/portfolio/painting6.jpg";
import painting7  from "../Images/portfolio/painting7.jpg";
import painting8  from "../Images/portfolio/painting8.jpg";
import painting9  from "../Images/portfolio/painting9.jpg";
import painting10  from "../Images/portfolio/painting10.jpg";
import reacts from '../Images/Icon/react.svg';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';

const content = [
  {
    img: painting1,
    name: 'Parrots',
    desc: 'Parrots bring color to our lives, not just with their vibrant feathers, but also with the warmth they share. In their playful chirps and gentle gaze, we find a reminder that love knows no boundaries, and that even the smallest gestures can brighten our days.',
    cat: 'painting',
  },
  {
    img: painting2,
    name: '',
    cat: 'painting',
  },
  {
    img: painting3,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting4,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting5,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting6,
    name: 'Shrimat Sudhindra Thirta Swami',
    desc: 'Legal and Spiritual head of the Kashi Math and the twentieth successive person called the swamiji of guru parampara.',
    cat: 'painting',
  },
  {
    img: painting7,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting8,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting9,
    name: ' ',
    cat: 'painting',
  },
  {
    img: painting10,
    name: 'Ammembal Subba Rao Pai',
    desc: "A leading lawyer of Mangalore, India. He was the founder of Canara Bank, now one of India's leading banks, and Canara Educational Institutions.",
    cat: 'painting',
  },
];


function filterWeb(item) {
  if (item.cat === 'web' || item.cat === 'web, ui') {
    return true;
  }
}

function filterArticles(item) {
  if (item.cat === 'article') {
    return true;
  }
}

function filterNews(item) {
  if (item.cat === 'news') {
    return true;
  }
}

function filterPaintings(item) {
  if (item.cat === 'painting') {
    return true;
  }
}

const Porfolio = () => {
  const [myWork, setMyWork] = React.useState(content);
  const [active, setActive] = React.useState("all")

  const WEB = content.filter(filterWeb);
  const PAINTINGS = content.filter(filterPaintings);
  const ARTICLE = content.filter(filterArticles);
  const NEWS = content.filter(filterNews);

  async function all() {
    setMyWork(content);
    setActive("all")
  }

  async function web() {
    setMyWork(WEB);
    setActive("web")
  }

  async function paintings() {
    setMyWork(PAINTINGS);
    setActive("paintings")
  }

  async function news() {
    setMyWork(NEWS);
    setActive("news")
  }

  async function articles() {
    setMyWork(ARTICLE);
    setActive("article")
  }

  useEffect(() => {
    all();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='portfolio'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>My Work</span>
            </h2>

          <hr className="line-tittle" />
          </Grid>
        </Grid>

        <Grid container justifyContent='center' spacing={3}>
          <Grid item>
            <Button
              onClick={all}
              size='large'
              variant={active === "all" ? 'contained' : 'outlined'}
              className={active === "all" ? 'btn btn-primary' : 'btn btn-second'}
            >
              All
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={web}
              size='large'
              variant={active === "web" ? 'contained' : 'outlined'}
              className={active === "web" ? 'btn btn-primary' : 'btn btn-second'}
            >
              Web Development
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={paintings}
              size='large'
              variant={active === "paintings" ? 'contained' : 'outlined'}
              className={active === "paintings" ? 'btn btn-primary' : 'btn btn-second'}
            >
              PAINTINGS
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={news}
              size='large'
              variant={active === "news" ? 'contained' : 'outlined'}
              className={active === "news" ? 'btn btn-primary' : 'btn btn-second'}
            >
              NEWSPAPER CLIPPINGS
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={articles}
              size='large'
              variant={active === "article" ? 'contained' : 'outlined'}
              className={active === "article" ? 'btn btn-primary' : 'btn btn-second'}
            >
              COURSES
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction="row"
          style={{ margin: '2rem 0' }}
        >
          {myWork.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} className="cont" key={index}>
            <img
              src={item.img}
              alt='portfolio'
              width='100%'
              style={{ borderRadius: '.5rem'}}
              className="shadow"
            />

            <div className="category">
              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'logo' ? "1" : "0"}}>
                <img src={illustration} alt='profil' width='80%' />
              </div>

              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'web' || item.cat === 'web, ui' ? "1" : "0" }}>
                <img src={reacts} alt='profil' width='80%' />
              </div>

              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'ui' || item.cat === 'web, ui' ? "1" : "0"}}>
                <img src={laptop} alt='profil' width='80%' />
              </div>
            </div>

              <div className="overlay">
                <h4 style={{ margin: '4rem 0 1rem 0', color: '#ffff', textAlign: 'center' }}>{item.name}</h4>

                <p style={{ color: '#ffff', marginBottom: "2rem" }}>{item.desc}</p>

                <Grid container spacing={2} justify="center" alignItems="center">
                  <Grid item xs={12} lg={6}>
                    <a href={item.url !== "" ? item.url : "#"} target="_blank" rel="noreferrer">
                      <Button
                        size='medium'
                        variant='contained'
                        className='btn btn-primary'
                      >
                        {"View"}
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Porfolio;
