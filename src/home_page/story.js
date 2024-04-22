import Arrow6 from '../assets/images/arrow_6.png';

export default function OurStory(){
    return(
        <section id="story_and_choose_us">
            <div className="container py-5 my-5">
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-md-1 col-0 order-md-1 order-0"></div>
                    <div className="col-md-4 col-12 order-md-1 order-2">
                        <div className="mx-md-0 mx-4">
                            <h1 className="fw-bolder text-center" data-aos="fade-right">OUR STORY</h1>
                            <div className="story_text_box rounded-4 my-5" data-aos="fade-up" data-aos-duration="1000">
                                <p className="story_text p-md-5 px-4 py-5 fw-bold">
                                    GoGreen Verz Tech Solutions leads the fusion of web2 and
                                    web3, creating hybrid solutions on multichain platforms.
                                    Start your sustainable tech journey with us. We're dedicated
                                    to transforming digital landscapes by seamlessly integrating
                                    established web technologies with the latest advancements ,
                                    guiding businesses through a progressive digital journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-12 d-flex justify-content-center align-item-center order-md-2 order-1">
                        <div className="align-self-center bounce">
                            <img src={Arrow6} className="down_arrow_img" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-3">
                        <div className="d-flex flex-column mx-md-0 mx-4">
                            <div className="story_text_box rounded-4 my-5 py-4 order-md-1 order-2" data-aos="fade-down">
                                <p className="story_text p-md-5 p-4 fw-bold">
                                    At GoGreenVerz, sustainability is at the heart of all we do.
                                    From development to deployment, we prioritize eco- friendly
                                    practices, ensuring a positive impact on the planet. Partner
                                    with us for your technology needs, committed to a brighter
                                    tomorrow.
                                </p>
                            </div>
                            <h1 className="fw-bolder text-center order-md-2 order-1" data-aos="fade-left" data-aos-duration="1000">WHY CHOOSE US?</h1>
                        </div>
                    </div>
                    <div className="col-md-1 col-0 order-md-4 order-0" ></div>
                </div>
            </div>
        </section>
    )
}