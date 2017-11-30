import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/ru';

import './index.css';

import App from './App';

moment.locale('ru');

ReactDOM.render(<App />, document.getElementById('root'));