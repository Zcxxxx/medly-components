import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Forward30IconSvg from '../../assets/Media/forward_30_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Forward30Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Forward30IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Forward30Icon.Style = SvgIcon;
Forward30Icon.displayName = 'Forward30Icon';

export default Forward30Icon
