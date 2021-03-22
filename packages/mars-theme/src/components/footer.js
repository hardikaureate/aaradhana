import { connect, styled } from "frontity";
import Link from "./link";
import Slider from "react-slick";
//import testimonialImg from "./image/testimonial-image.png"
import phoneicon from "./image/phone-icon.svg"
import facebook from "./image/fb.png"
import twitter from "./image/twit.png"
import insta from "./image/insta.png"
import youtube from "./image/youtube.png"
import ProgressiveImage from "react-progressive-graceful-image"
import PlaceHolder from '../components/image/placeholder.png'

const Footer = ({ state }) => {
  const data = state.source.get(state.router.link);
  //const post = state.source[data.type][data.id];

  const clientsData = state.source.get("options/");
  const header_more_text = clientsData['acf']['header_more_inq_text'];
  const footer_quotetitle = clientsData['acf']['footer_quote_title'];
  const testimonialData = clientsData['acf']['testimonials_item'];
  const testimonialTitle = clientsData['acf']["testimonial_title"];
  //const testimonialImage = clientsData['acf']["author_image"];
  const footer_logo = clientsData['acf']['header_logo'];
  const fblink = clientsData.acf['general_facebook'];
  const twitlink = clientsData.acf['general_twitter'];
  const instalink = clientsData.acf['general_instagram'];
  const youtubelink = clientsData.acf['general_youtube'];
  const footeraddress = clientsData.acf['general_address'];
  const footerphone = clientsData.acf['general_phone'];
  const footeremail = clientsData.acf['general_email'];
  const footercopyright = clientsData.acf['footer_copyright'];
  const footermenu = clientsData['acf']['footer_menu'];
  const footermenutwo = clientsData['acf']['footer_menu_two'];
  
   
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    centerMode: true,
    centerPadding: '250px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '0px',
        }
      }
    ]
  };
  
  //console.log(JSON.stringify(testname));
  //console.log(testimonialImage);
  return data.isReady ? (
    <>
      <div className="wp-block-group">
            <div className="wp-block-group__inner-container wrapper-footer">
            <h2 className="has-text-align-center alltitle sliderTitle"><span>{testimonialTitle}</span></h2>
            
                <div className="wp-block-columns">
                    <div className="wp-block-column wrapper-testimonial-slider">
                        <Slider {...settings}>
                        {testimonialData.map((testimonialData,index) => (
                          <div className="wp-block-column" key={index}>
                              <div className="testimonial-item">
                                    <div className="description">
                                      <p>{testimonialData.testimonial_description}</p>
                                    </div>
                                    <div className="testimonial-author">
                                      <div className="author-image">
                                      <ProgressiveImage className="dynamicplaceholder" src={testimonialData.author_image['sizes']['large']} placeholder={PlaceHolder}>{(src) => <img src={src} alt="Service we offer" width="50" height="50"/>}</ProgressiveImage>
                                        {/* <img src={testimonialData.author_image['sizes']['large']} width="50" height="50" /> */}
                                      </div>
                                      <div className="author-content">
                                          <h3>{testimonialData.testimonial_name}</h3>
                                          <p>{testimonialData.testimonial_designation}</p>
                                      </div>
                                    </div>
                                </div>
                          </div>
                          ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        {/* Go to Call Section */}
        <div className="wp-block-group wrapper-get-quote">
            <div className="wp-block-group__inner-container footerblock">
                <div className="wp-block-columns">
                    <div className="wp-block-column">
                        <h3>{footer_quotetitle}</h3>
                    </div>
                    <div className="wp-block-column right-column">
                        <div className="theme-btn">
                            <a href={"tel:"+footerphone}>Get Your Quote</a>
                        </div>
                        <div className="extra-text">
                          <p>or</p>
                        </div>
                        <div className="">
                            <div className="wrapper-phone">
                              <div className="phone-icon">
                              <ProgressiveImage className="dynamicplaceholder" src={phoneicon} placeholder={PlaceHolder} >{(src) => <img src={src} alt="phone" width="40" height="40"/>}</ProgressiveImage>
                                  {/* <img src={phoneicon} /> */}
                              </div>
                              <div className="phone-content">
                                  <p>{header_more_text}</p> 
                                  <a href={"tel:"+footerphone}>{footerphone}</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="mainfooter">
              <div className="wp-block-group">
                <div className="wp-block-group__inner-container wrapper-footer">
                  <div className="footerLogo">
                  <ProgressiveImage className="dynamicplaceholder" src={footer_logo['sizes']['large']} placeholder={PlaceHolder} >{(src) => <img src={src} alt="footerlogo" width="232" height="60"/>}</ProgressiveImage>
                    {/* <img src={footer_logo['sizes']['large']} width="232" height="60"/> */}
                  </div>
                  <div className="socialmedia_btn">
                    <ul>
                      <li className="sociallink"><a href={fblink}><img src={facebook} width="10" height="20"/></a></li>
                      <li className="sociallink"><a href={twitlink}><img src={twitter} width="19" height="16"/></a></li>
                      <li className="sociallink"><a href={instalink}><img src={insta} width="24" height="23"/></a></li>
                      <li className="sociallink"><a href={youtubelink}><img src={youtube} width="22" height="17"/></a></li>
                    </ul>
                  </div>
                  <div className="footerAddress">
                          <p>{footeraddress}</p>
                  </div>
                  <div className="footerid">
                     <p className="footeremail"><a href={"mailto:"+footeremail}>{footeremail}</a></p> 
                     <p className="footerspace">|</p>
                     <p className="footernumber"><a href={"tel:"+footerphone}>{footerphone}</a></p>     
                  </div>      
            </div>
            <div className="wp-block-group footermenudata">
            <ul className="menulist">
            {footermenu.map((footermenu,index) => (<li className="listofmenu" key={index}><Link link={footermenu.footer_menu_url} className={state.router.link === footermenu.footer_menu_url ? "active" : ""}>{footermenu.footer_menu_name}</Link></li>))}
            </ul>
            <ul className="menulisttwo">
            {footermenutwo.map((footermenutwo,index) => (<li className="listofmenu" key={index}><Link link={footermenutwo.footer_menu_url_new} className={state.router.link === footermenutwo.footer_menu_url_new ? "active" : ""}>{footermenutwo.footer_menu_name_new}</Link></li>))}
            </ul>
            </div>
            <div className="wp-block-group copyright">
                <div className="copyright_text">{footercopyright}</div>          
            </div>  
          </div>
          </div>
        {/* Go to Call Section */}
    </>
  
  ) : null;
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

/*const Container = styled.div`
  width: 1240px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;*/
