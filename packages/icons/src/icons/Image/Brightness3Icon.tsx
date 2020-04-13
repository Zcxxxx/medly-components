import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness3IconSvg from '../../assets/Image/brightness_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness3Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Brightness3IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Brightness3Icon.Style = SvgIcon;
Brightness3Icon.displayName = 'Brightness3Icon';

export default Brightness3Icon
