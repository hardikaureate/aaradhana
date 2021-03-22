import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  const data = state.source.get(state.router.link);
  const navOptions = state.source.get("options/");
  const frontmenu = navOptions['acf']['header_menu'];

  return data.isReady ? (
    <>
      <MenuOverlay />
      <div className="mobileMenuContent">
      <ul className="menulist">
            {frontmenu.map(frontmenu => (<li className="headlistofmenu"><Link link={frontmenu.header_menu_url}>{frontmenu.header_menu_name}</Link></li>))}
            </ul>
        </div>
    </>
  ) : null;
};

const MenuOverlay = styled.div`
`;
/*const MenuContent = styled.div`
  z-index: 3;
`;*/

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
