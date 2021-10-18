import Link from 'next/Link';
import React from 'react'
import style from "./Card.module.scss"
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
export default function Card(props) {
    const {news} = props;
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return (
      <Link href={`/news/${news.id}`}>
        <div className={style.card}>
          <p className={style.day}>{dayjs.utc(news.publishedAt).tz('Asia/Tokyo').format('YYYY-MM-DD')}</p>
          <p className={style.cat}>{news.category}</p>
          <p className={style.title}>{news.title}</p>
        </div>
      </Link>
    )
}
