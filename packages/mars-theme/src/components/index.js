import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
//import List from "./list";
import Post from "./post";
//import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Customstyles from './custom/style.css';
import Themestyles from './custom/theme.css';
import titleImage from "./custom/Group.png"
import mplaceIcon from "./custom/mplace_icon.png"
import phoneIcon from "./image/phone-icon.svg"
import Footer from "./footer";
import slickcss from "slick-carousel/slick/slick.css";
import slickcssTheme from "slick-carousel/slick/slick-theme.css";
import sliderarrow from "./image/index.svg"
import Sidemail from "./image/sidemail.png"
import Sidemap from "./image/sidemap.png"
import Sidephone from "./image/sidephone.png"
import CSemail from "./image/csemail.png"
import CSname from "./image/csname.png"
import CSsubject from "./image/cssubject.png"
import aafavicon from '../components/image/android-icon-36x36.png'
import monfont from './fonts/Montserrat-Medium.woff2';


const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <html lang="en" />
        <meta name="description" content={state.frontity.description} />
        <link rel="manifest" href={`${state.source.api}wp/v2/web-app-manifest`}/>
        <link rel="icon" type="image/png" sizes="36x36" href={aafavicon} />
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='expires' content='0' />
        <meta http-equiv='pragma' content='no-cache' />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global
      styles={css` 
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          src: url("${monfont}") format("woff2");
          font-display: swap;
        }
      `} />
      <Global styles={globalStyles} />
      <Global styles={css(slickcss)} />
      <Global styles={css(slickcssTheme)} />
      <Global styles={css(Customstyles)} />
      <Global styles={css(Themestyles)} />


      {/* Add the header of the site. */}
      <HeadContainer className="main_head_container">
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <p>Demo Content</p>
          {/* <Loading when={data.isFetching} /> */}
          {/* <List when={data.isArchive} /> */}
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <FootContainer>
        <Footer />
      </FootContainer>
    </>
  );
};

export default connect(Theme);


const globalStyles = css`
  body {
    margin: 0;
    font-family: font-family: 'Montserrat', sans-serif;
    font-display: swap;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  
  

  .alltitle span:before {
    content: "";
    background: url(${titleImage}) no-repeat;
    width: 52px;
    height: 13px;
    position: absolute;
    left: -80px;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
}

  .csnameimage{
    background: url(${CSname}) no-repeat;
    position: absolute;
    background-size: cover
  }
  .csemailimage{
    background: url(${CSemail}) no-repeat;
    position: absolute;
    background-size: cover
  }
  .cssubimage{
    background: url(${CSsubject}) no-repeat;
    position: absolute;
    background-size: cover
  }

  h6.csformh6.csloc:before{
    content: "";
    background: url(${Sidemap}) no-repeat;
    width: 18px;
    height: 22px;
    margin: 0 12px 0 -37px;
    position: absolute;
    background-size: cover;
  }
  h6.csformh6.csphon:before{
    content: "";
    background: url(${Sidephone}) no-repeat;
    width: 20px;
    height: 20px;
    margin: 0 12px 0 -37px;
    position: absolute;
    background-size: cover;
  }
  h6.csformh6.csmail:before{
    content: "";
    background: url(${Sidemail}) no-repeat;
    width: 20px;
    height: 16px;
    margin: 0 12px 0 -37px;
    position: absolute;
    background-size: cover;
  }

.alltitle span:after {
    content: "";
    background: url(${titleImage}) no-repeat;
    width: 52px;
    height: 13px;
    position: absolute;
    right: -80px;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
}
  p.mplace_digit:before{
    content: "";
    background: url(${mplaceIcon}) no-repeat;
    width: 18px;
    height: 18px;
    margin: 0 6px 0 0;
    position: absolute;
    left: 0;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
  }

  .wrapper-testimonial-slider .slick-prev:before{
    content:url(${sliderarrow}) ;
    transform: rotate(180deg);
  }
  .wrapper-testimonial-slider .slick-next:before{
    content:url(${sliderarrow}) ;
  }
  .wp-block-column.callicon:before {
    content: "";
    background: url(${phoneIcon}) no-repeat;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
    margin-top: 20px;
  }`;



const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const FootContainer = styled.div`
  display: block;
  background-color: #fff;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;
