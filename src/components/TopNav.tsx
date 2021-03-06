import '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarEnd,
  NavbarItem,
  NavbarMenu
} from 'bloomer';
import React, { StatelessComponent } from 'react';

interface IProps {
  isSettings: boolean;
  onToggleSettingsMenu: () => void;
}

const renderSettingsToggle = (onToggleSettingsMenu: () => void) => {
  return (
    <span onClick={onToggleSettingsMenu} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon icon="cogs" size="lg" />
    </span>
  );
};

const TopNav: StatelessComponent<IProps> = ({ isSettings = false, onToggleSettingsMenu }) => {
  return (
    <Navbar className="has-shadow is-spaced">
      <Container>
        <NavbarBrand>
          <NavbarItem>
            WDW Planner
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarEnd>
            <NavbarItem>
              {isSettings && renderSettingsToggle(onToggleSettingsMenu)}
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </Navbar>
  );
};

export default TopNav;
