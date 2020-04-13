import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterFramesIconSvg from '../../assets/Image/filter_frames_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterFramesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterFramesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterFramesIcon.Style = SvgIcon;
FilterFramesIcon.displayName = 'FilterFramesIcon';

export default FilterFramesIcon
