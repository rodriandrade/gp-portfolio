import {Grid, Col} from '../Grid'
import {VideoYouTube, VideoLocal} from './styled'

const Video = props => {

    const {video} = props.data
    //<p>Transmisiones por "Frecuencia Fútbol" Am Con Vos 1420 x "Secta Deportiva" canal de Youtube</p>
    console.log(video);
    return(
        <Col desktop={4} tablet={6} mobile={12}>
            <div>
                {video.includes("https") ? 
                    <VideoYouTube src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoYouTube>
                    : 
                    <VideoLocal controls><source src="/gol_de_jorginho.mp4" type="video/mp4" /></VideoLocal>
                }
            </div>
        </Col>
    )
}

export default Video