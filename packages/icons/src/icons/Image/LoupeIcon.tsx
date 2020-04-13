import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LoupeIconSvg from '../../assets/Image/loupe_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LoupeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LoupeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LoupeIcon.Style = SvgIcon;
LoupeIcon.displayName = 'LoupeIcon';

export default LoupeIcon
