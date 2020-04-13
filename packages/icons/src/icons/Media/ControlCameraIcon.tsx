import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ControlCameraIconSvg from '../../assets/Media/control_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ControlCameraIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ControlCameraIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ControlCameraIcon.Style = SvgIcon;
ControlCameraIcon.displayName = 'ControlCameraIcon';

export default ControlCameraIcon
