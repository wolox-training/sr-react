/* eslint-disable no-magic-numbers */
import React from 'react';

import Card from 'components/Card';
import { useSelector } from 'contexts';

import styles from './styles.module.scss';

function BookList() {
  const books = useSelector(state => state.books);
  return (
    <div className={styles.listContainer}>
      {books.map(book => (
        <Card
          key={book.id}
          id={book.id}
          source={book.imageUrl}
          alt={`image-${book.id}`}
          title={book.title}
          subtitle={book.author}
        />
      ))}
    </div>
  );
}

export default BookList;
