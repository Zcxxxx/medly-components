import { Text } from '@medly-components/core';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface SideNavStyledProps extends WithThemeProp {
    open: boolean;
}
export interface NavListProps extends HTMLProps<HTMLUListElement>, WithThemeProp {}

export interface NavItemProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    to?: string;
    openSideNavOnClick?: boolean;
    sidenavOpenHandler?: () => void;
    active?: boolean;
}

export interface NavItemStyledProps extends HTMLProps<HTMLLIElement>, WithThemeProp {
    as?: any;
    active?: string;
}

export interface SideNavStaticProps {
    NavItem: React.SFC<NavItemProps>;
    NavIcon: React.SFC;
    NavList: React.SFC<NavListProps>;
    SubNavList: React.SFC<NavListProps>;
    NavText: typeof Text;
}
