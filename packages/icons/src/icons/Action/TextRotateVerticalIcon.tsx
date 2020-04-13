import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotateVerticalIconSvg from '../../assets/Action/text_rotate_vertical_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotateVerticalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextRotateVerticalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextRotateVerticalIcon.Style = SvgIcon;
TextRotateVerticalIcon.displayName = 'TextRotateVerticalIcon';

export default TextRotateVerticalIcon
