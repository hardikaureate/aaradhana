import { connect, styled } from "frontity";
import React, { useState } from 'react';
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import HeadOne from "./image/headone.png"
import HeadTwo from "./image/headtwo.png"
import HeadThree from "./image/headthird.png"
//import Mobhomebanner from "./image/mhomebanner.jpg"
import Mobhomebanner from "./image/mhomebanner.jpg"
import ProgressiveImage from "react-progressive-graceful-image"
import PlaceHolder from '../components/image/placeholder.png'
//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import DeviceIdentifier from 'react-device-identifier'

const Header = ({ state, actions, libraries}) => {

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const headerimage = post.acf['main_header_image'];
  const mobileheaderimage = post.acf['home_mobile_banner_image'];
  const mainheader = state.source.get("options/");
  const header_title_one = mainheader['acf']['bottom_header_title_one'];
  const header_text_one = mainheader['acf']['bottom_header_text_one'];
  const header_title_two = mainheader['acf']['bottom_header_title_two'];
  const header_text_two = mainheader['acf']['bottom_header_text_two'];
  const header_title_three = mainheader['acf']['bottom_header_title_three'];
  const header_text_three = mainheader['acf']['bottom_header_text_three'];
 
  

  //const postType = data.type;
  
  // const [show, setShow] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(false)
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  // if(!show) {
  //   return headerimage['sizes']['2048x2048'];
  // }
  return data.isReady ? (
    <>
        {/* <Container> */}
        <StyledLink link="/">
        
        {/* <Title>{state.frontity.title}</Title> */}
      </StyledLink>
      {/* <Description>{state.frontity.description}</Description> */}
      <MobileMenu />
    {/* </Container> */}
    <Nav />
    
    {/* {data.type === "page" ? <img src={headerimage['sizes']['large']} width="100%" min-height="400" className="headbannerimage"/> :""} */}
          {/* <img src={Mobhomebanner} className="mobhomebanner" alt="HeadBanner" style={{width: '100%', height: '350px !important'}}/> */}
    {mobileheaderimage ?
          <img src={mobileheaderimage['sizes']['large']} className="mobhomebanner" alt="HeadBanner" style={{width: '100%', height: '350px !important'}}/>
    :null}
    {/* <ProgressiveImage src={Mobhomebanner} placeholder={PlaceHolder} >
    <DeviceIdentifier isMobile={true}>
          {(src) => <img src={Mobhomebanner} className="mobhomebanner" alt="HeadBanner" style={{width: '100%', height: '400'}} />}
      </DeviceIdentifier>
      </ProgressiveImage> */}
      {
        headerimage ?
        <img src={headerimage['sizes']['large']} className="headbannerimage homebannerhide" alt="HeadBanner" width="100%" height="383"/>
        // <ProgressiveImage src={headerimage['sizes']['large']} placeholder={PlaceHolder} alt="HeadBannerPlace" className="homebannerhide"> 
        //     {(src) => <img src={src} srcSet={`${src} 300w, ${src} 768w, ${src} 1280w`}  className="headbannerimage homebannerhide" alt="HeadBanner" width="100%" height="383"/>}
        //    {/* {(src) => <img src={src + `?w=${1400}&h=383`} className="headbannerimage sss" alt="HeadBanner" style={{width: '100%', height: imageWidth}}/>} */}
        //    {/* {(src) => <img src={src} className="headbannerimage sss" alt="HeadBanner" width="100%" height="383"/>} */}
          // </ProgressiveImage>
          // <LazyLoadImage src={headerimage['sizes']['2048x2048']} delayTime="1500" className="headbannerimage" alt="HeadBanner"  width="100%" height="383"/>
          : <ProgressiveImage src={PlaceHolder}> 
            {(src) => <img src={src} className="headbannerimage eee homebannerhide" placeholder={PlaceHolder} alt="Placeholder1"/>}
            {/* {(src) => <img src={src} className="headbannerimage" alt="Placeholder1" width="40%" height="383"/>} */}
          </ProgressiveImage>
      }
      
          <div className="headmenuu">
            <div className="headnav">
              <div className="wp-block-group">
                <div className="wp-block-group__inner-container wrapper-header">
                  <div className="wp-block-columns head_bottom_section">
                      <div className="head_col_one wp-block-column">
                      <ProgressiveImage src={HeadOne} placeholder={PlaceHolder} >{(src) => <img src={src} alt="Service we offer" width="40" height="40"/>}</ProgressiveImage>
                          <div className="wp-block-column headbotInner">
                            <p className="exp_call_text headText">{header_title_one}</p>
                            <h5 className="exp_number headText">{header_text_one}</h5>
                          </div>
                      </div>
                      <div className="head_col_one wp-block-column">
                      <ProgressiveImage src={HeadTwo} placeholder={PlaceHolder} >{(src) => <img src={src} alt="Service we offer" width="40" height="40"/>}</ProgressiveImage>
                          <div className="wp-block-column headbotInner">
                            <p className="exp_call_text headText"> {header_title_two}</p>
                            <h5 className="exp_number headText">{header_text_two}</h5>
                          </div>
                      </div>
                      <div className="head_col_one wp-block-column">
                      <ProgressiveImage src={HeadThree} placeholder={PlaceHolder} >{(src) => <img src={src} alt="Service we offer" width="40" height="40"/>}</ProgressiveImage>
                          <div className="wp-block-column headbotInner">
                            <p className="exp_call_text headText">{header_title_three}</p>
                            <h5 className="exp_number headText">{header_text_three}</h5>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
   ) : null;
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledLink = styled(Link)`
  text-decoration: none;
`;
