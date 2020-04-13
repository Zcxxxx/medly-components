import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg from '../../assets/Device/signal_wifi_statusbar_connected_no_internet_26x24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon.Style = SvgIcon;
SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon.displayName = 'SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon';

export default SignalWifiStatusbarConnectedNoInternet26x24pxRoundedIcon
