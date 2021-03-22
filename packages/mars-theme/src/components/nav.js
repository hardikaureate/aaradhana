import { connect, styled } from "frontity";
import Link from "./link";
//import aalogo from "./image/aalogo.png"
import callIcon from "./image/phone-icon.svg"
import ProgressiveImage from "react-progressive-graceful-image"
import PlaceHolder from '../components/image/placeholder.png'
/**
 * Navigation Component
 *
 * It renders the navigation links
 */


const Nav = ({ state }) => {

  const data = state.source.get(state.router.link);
  const navOptions = state.source.get("options/");
  const header_more_text = navOptions['acf']['header_more_inq_text'];
  const headnumber = navOptions['acf']['general_phone'];
  const header_logo = navOptions['acf']['header_logo'];
  const frontmenu = navOptions['acf']['header_menu'];

  // Get the data of the post.
  //console.log(header_logo);
  return data.isReady ? (
  <NavContainer className="MainHeader">
    <div className="logo"><Link link="/"><img src={header_logo['sizes']['large']} width="154" height="40" /></Link></div>
    {/* <div className="logo">
      <Link link="/">
        <ProgressiveImage src={header_logo['sizes']['medium']} placeholder={PlaceHolder} className="dynamicplaceholder">
          {(src) => <img src={src} width="200" height="51" alt="Service we offer"/>}
        </ProgressiveImage>
      </Link>
    </div> */}
    <div className="menu_links">
    
            <ul className="menulist">
              {frontmenu.map((frontmenu,i) => (<li className="headlistofmenu" key={i} >
                <Link link={frontmenu.header_menu_url} className={state.router.link === frontmenu.header_menu_url ? "active" : ""}>
                  {frontmenu.header_menu_name}</Link></li>))}
            </ul>
          
      {/* {state.theme.menu.map(([name, link]) => {
        // Check if the link matched the current page url
        
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={name}>
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
            
          </NavItem>
        );
      })} */}
    </div>
    <div className="headercall">
      <a href={"tel:"+headnumber}><ProgressiveImage className="dynamicplaceholder" src={callIcon} placeholder={PlaceHolder}>{(src) => <img src={src} alt="HeadBanner" width="34" height="34"/>}</ProgressiveImage></a>
      <div>
        <p>{header_more_text}</p>
        <div className="calltext">
          <a href={"tel:"+headnumber}>{headnumber}</a>
        </div>
      </div>
    </div>
  </NavContainer>
  ) : null;
};

export default connect(Nav);


const NavContainer = styled.nav`
  list-style: none;
  box-sizing: border-box;
  overflow-x: auto;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;
