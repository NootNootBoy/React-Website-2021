import React, {useState} from 'react'
import Video from '../../videos/home.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {

    const [hover, setHover] = useState(false)
    
    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Nouvel album disponible </HeroH1>
                <HeroP>disponible sur toutes les plateformes 
                    dès maintenant.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="decouvrir" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="false">
                        Decouvrir {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
