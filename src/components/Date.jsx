import React from 'react';
import moment from 'moment';

export default function DateTime({ value, format }) {
    return moment(value).format(format);
};