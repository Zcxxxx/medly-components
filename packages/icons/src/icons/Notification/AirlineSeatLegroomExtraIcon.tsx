import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatLegroomExtraIconSvg from '../../assets/Notification/airline_seat_legroom_extra_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatLegroomExtraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AirlineSeatLegroomExtraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AirlineSeatLegroomExtraIcon.Style = SvgIcon;
AirlineSeatLegroomExtraIcon.displayName = 'AirlineSeatLegroomExtraIcon';

export default AirlineSeatLegroomExtraIcon
