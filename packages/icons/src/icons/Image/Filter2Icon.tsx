import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter2IconSvg from '../../assets/Image/filter_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter2IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Filter2Icon';

const Filter2Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Filter2Icon
