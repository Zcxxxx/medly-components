import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowBackIconSvg from '../../assets/Navigation/arrow_back_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowBackIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowBackIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowBackIcon.Style = SvgIcon;
ArrowBackIcon.displayName = 'ArrowBackIcon';

export default ArrowBackIcon
