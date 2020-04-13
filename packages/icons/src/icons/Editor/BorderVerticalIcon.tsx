import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderVerticalIconSvg from '../../assets/Editor/border_vertical_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderVerticalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BorderVerticalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BorderVerticalIcon.Style = SvgIcon;
BorderVerticalIcon.displayName = 'BorderVerticalIcon';

export default BorderVerticalIcon
