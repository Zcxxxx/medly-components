import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShareIconSvg from '../../assets/Social/share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ShareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ShareIcon.Style = SvgIcon;
ShareIcon.displayName = 'ShareIcon';

export default ShareIcon
