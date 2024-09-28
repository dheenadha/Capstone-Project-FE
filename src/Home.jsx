import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./home.css"
import Subtitle from './Subtitle';
import MasonryImagesGallery from './MasonryImagesGallery';
import Newsletter from './Newsletter';
import About from './About';
export default class Home extends PureComponent {
  render() {
    return (
  <>
  <Container>
        <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                </div>
                                <h1>
                                    Traveling opens the door to creating
                                    <span className="highlight"> memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    A recusandae ea nihil deserunt. Odit, eum nihil quibusdam
                                    laboriosam quos obcaecati.
                                </p>
                            </div>
                            
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                            <img src="src/assets/hero-img01.jpg" alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4">
                            <img src="src/assets/hero-img02.jpg" alt="" />

                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                            <video src="src/assets/hero-video.mp4" alt="" controls />

                            </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                            <Subtitle subtitle={'Experience'} />
                            

                                <h2>With our all experience <br />we will serve you</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    <br />
                                    Quas aliquam, hic tempora inventore suscipit unde.
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                            <img src="src/assets/experience.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                    <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallery'} />
                            <h2 className="gallery__title">
                                Visit our customers tours gallery
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery />
                           
                        </Col>
                        
                    </Row>
                </Container>
                    </Container>
                   
                    <Newsletter />
                    <About/>
  </>
    )
  }
}
