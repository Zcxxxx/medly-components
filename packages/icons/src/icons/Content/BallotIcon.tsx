import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BallotIconSvg from '../../assets/Content/ballot_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BallotIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BallotIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BallotIcon.Style = SvgIcon;
BallotIcon.displayName = 'BallotIcon';

export default BallotIcon
