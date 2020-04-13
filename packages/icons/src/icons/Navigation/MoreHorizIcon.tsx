import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoreHorizIconSvg from '../../assets/Navigation/more_horiz_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoreHorizIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoreHorizIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoreHorizIcon.Style = SvgIcon;
MoreHorizIcon.displayName = 'MoreHorizIcon';

export default MoreHorizIcon
