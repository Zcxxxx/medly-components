import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ToysIconSvg from '../../assets/Hardware/toys_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ToysIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ToysIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ToysIcon.Style = SvgIcon;
ToysIcon.displayName = 'ToysIcon';

export default ToysIcon
