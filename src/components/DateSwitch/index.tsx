import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import './index.scss';
import AngleLeft from '../icons/AngleLeft';

type Props = {
  date: Date,
  setDate: (date: Date) => any,
};

const DateSwitch = ({date, setDate}: Props) => {
  const getDateString = (date: Date) => {
    const now = new Date();
    const isToday = now.toDateString() === date.toDateString();

    if (isToday) {
      const currentMonth = format(date, 'MMM', {locale: ru});
      const firstWord = `${date.getDate()} ${currentMonth.slice(0, -1)}`;
      const secondWord = 'Сегодня';

      return `${firstWord} · ${secondWord}`;
    } else {
      const currentMonth = format(date, 'MMMM', {locale: ru});
      return `${date.getDate()} ${currentMonth}`;
    }

    
  };

  return (
    <div className="date-switch">
      <button type="button" className="date-switch__arrow date-switch__arrow_prev" onClick={() => setDate(addDays(date, -1))}>
        <AngleLeft color="inherit" width={10} height={10} />
      </button>
      <div className="date-switch__current">{getDateString(date)}</div>
      <button type="button" className="date-switch__arrow date-switch__arrow_next" onClick={() => setDate(addDays(date, 1))}>
        <AngleLeft color="inherit" width={10} height={10} />
      </button>
    </div>
  );
};

export default DateSwitch;