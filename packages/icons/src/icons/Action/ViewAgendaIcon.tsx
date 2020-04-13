import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewAgendaIconSvg from '../../assets/Action/view_agenda_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewAgendaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewAgendaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewAgendaIcon.Style = SvgIcon;
ViewAgendaIcon.displayName = 'ViewAgendaIcon';

export default ViewAgendaIcon
