import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

type Props = {
  date: Date,
  startHour: number,
  endHour: number,
};

const prettifyNumberToTwoDigit = (n: number) => {
  const stringNumber = n.toString();
  return n > 9 ? stringNumber : `0${stringNumber}`;
}

const TimeRow = ({date, startHour, endHour}: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentTimeString = `${currentHour}:${prettifyNumberToTwoDigit(currentMinutes)}`;

  const timesCount = endHour - startHour + 1;
  const itemClassName = 'time-row__item';
  const timeArray = Array.from(Array(timesCount), (time, i) => {
    const hour = startHour + i;
    let timeString = `${startHour + i}`;
    let className = itemClassName;

    if (hour < currentHour || (hour === currentHour && currentMinutes !== 0)) {
      className = className + ' time-row__item_state_disabled';
    }

    if (i === 0) {
      timeString = `${timeString}:00`;
    } else if (i === timesCount - 1) {
      timeString = `${endHour - 1}:59`;
    }

    const style: React.CSSProperties = {width: itemWidth || 'auto'};
    return(
      <div 
        style={style}
        className={className} 
        key={timeString}>{timeString}</div>
    );
  });

  useEffect(() => {
    const children = rowRef.current?.children;

    if (children) {
      const childrenArray: HTMLElement[] = [].slice.call(children);
      const itemsWidth = childrenArray.map((item: HTMLElement) => item.offsetWidth);
      const maxWidth = Math.max(...itemsWidth);

      setItemWidth(maxWidth);
    }
  }, []);

  const currentTimeAbsolute = currentHour + (currentMinutes / 60);
  const currentTimestampStyle: React.CSSProperties = {
    left: `${((currentTimeAbsolute - startHour) / (endHour - startHour)) * 100}%`,
  };

  const rootStyle: React.CSSProperties = {
    marginRight: (itemWidth / 2) * -1,
    marginLeft: (itemWidth / 2) * -1,
  };

  return (
    <div className="time-row" style={rootStyle}>
      <div className="time-row__row" ref={rowRef}>
        {timeArray}
      </div>
      <div className="time-row__current" style={currentTimestampStyle}>{currentTimeString}</div>
    </div>
  );
};

export default TimeRow;