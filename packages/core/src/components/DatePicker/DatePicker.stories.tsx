import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { placement } from '../Popover/Popover.stories';
import { DatePicker } from './DatePicker';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['top', 'bottom', 'left', 'right'];

export const Basic = () => {
    const [date, setDate] = useState(null);

    return (
        <DatePicker
            value={date}
            onChange={setDate}
            fullWidth={boolean('Full Width', false)}
            displayFormat={text('Display Format', 'MM/dd/yyyy') as Props['displayFormat']}
            disabled={boolean('Disabled', false)}
            placeholder={text('Placeholder', 'Start Date')}
            label={text('Label', 'Start Date')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            popoverPlacement={select('Popover Placement', placement, 'bottom-start')}
            required={boolean('Required', false)}
        />
    );
};
