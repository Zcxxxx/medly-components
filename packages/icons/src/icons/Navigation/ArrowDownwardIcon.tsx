import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDownwardIconSvg from '../../assets/Navigation/arrow_downward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDownwardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDownwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowDownwardIcon.Style = SvgIcon;
ArrowDownwardIcon.displayName = 'ArrowDownwardIcon';

export default ArrowDownwardIcon
