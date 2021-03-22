import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu} className="MenuToggle">
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  left:30px;
  top:40px;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;

  @media (max-width:768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width:414px) {
      left: 18px;
      top: 21px;
  }
`;

export default connect(MobileMenu);
