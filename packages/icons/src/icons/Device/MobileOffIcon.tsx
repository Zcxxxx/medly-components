import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MobileOffIconSvg from '../../assets/Device/mobile_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MobileOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MobileOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MobileOffIcon.Style = SvgIcon;
MobileOffIcon.displayName = 'MobileOffIcon';

export default MobileOffIcon
