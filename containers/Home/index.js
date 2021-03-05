import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Grid, Col} from '../../components/Grid'
import Inner from '../../components/Inner'
import Title from '../../components/Title'
import Video from '../../components/Video'
import NavMenu from '../../components/NavMenu'
import Section from '../../components/Section'
import Services from '../../components/Services'
import AboutCard from '../../components/AboutCard'
import Multimedia from '../../components/Multimedia'
import Masonry from 'react-masonry-css'
import Hero from '../../components/Hero'
import Streamings from '../../components/Streamings'
import ParticlesBackground from '../../components/ParticlesBackground'
import Footer from '../../components/Footer'
import Head from 'next/head'

const Home = () =>{

    const [videos, setVideos] = useState([])
    const [images, setImages] = useState([])
    const [streamings, setStreamings] = useState([])

    useEffect(() => {
        const fetchData = async () => {
              try {
                  const responseVideos = await axios.get(`https://gp-website-api-git-main-rodriandrade.vercel.app/videos`)
                  const responseImages = await axios.get(`https://gp-website-api-git-main.rodriandrade.vercel.app/imagenes`)
                  const responseStreamings = await axios.get(`https://gp-website-api-git-main.rodriandrade.vercel.app/streamings`)
                  setVideos(responseVideos.data);
                  setImages(responseImages.data);
                  setStreamings(responseStreamings.data)
              } catch (error) {
                  console.error('este es mi error',error);
              }
        }
        fetchData()
    }, [])

    const breakpointColumnsStreamings = {
        default: 3,
        1100: 3,
        700: 2,
        490: 1
      };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        490: 1
      };

    return(
        <>
            <Head>
                <title>Gabriel Piantanida - Periodista, relator y creador de contenido</title>
                <link rel="icon" href="/microphone-white.svg" />
            </Head>

            <NavMenu /> 
            <Inner>
                <Hero /> 
                <AboutCard />  
                <Services /> 
                <Section /> 
                <section>
                    <Grid colGap={60} rowGap={50}>
                        {videos && videos.map((video) => (<Video key={video.id} data={video} />))}
                    </Grid>
                </section>
                <section>
                    <Title size="h3">Producción y dirección de streamings</Title>
                    <Masonry
                        breakpointCols={breakpointColumnsStreamings}
                        className="my-masonry-grid-streamings"
                        columnClassName="my-masonry-grid-streamings_column">
                        {streamings && streamings.map((streaming) => (<Streamings key={streaming.id} data={streaming} />))}
                    </Masonry>
                </section>
                <section>
                    <Title size="h1" id="multimedia_section">Contenido Multimedia</Title>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {images && images.map((image) => (<Multimedia key={image.id} data={image} />))}
                    </Masonry>
                </section>
            </Inner>
               <Footer />
        </>
    )
}

export default Home