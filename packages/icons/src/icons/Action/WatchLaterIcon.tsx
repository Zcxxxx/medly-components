import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WatchLaterIconSvg from '../../assets/Action/watch_later_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WatchLaterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WatchLaterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WatchLaterIcon.Style = SvgIcon;
WatchLaterIcon.displayName = 'WatchLaterIcon';

export default WatchLaterIcon
