import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HighlightIconSvg from '../../assets/Editor/highlight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HighlightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HighlightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HighlightIcon.Style = SvgIcon;
HighlightIcon.displayName = 'HighlightIcon';

export default HighlightIcon
