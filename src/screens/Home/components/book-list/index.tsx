/* eslint-disable no-magic-numbers */
import React from 'react';
import i18next from 'i18next';

import BooksService from 'services/BookService';
import { useRequest } from 'hooks/useRequest';
import Loading from 'components/Spinner/components/loading';
import { HOME_ERROR_MESSAGES } from 'constants/index';
import Card from 'components/Card';

import styles from './styles.module.scss';

function BookList() {
  const [state, loading, error] = useRequest(
    {
      request: BooksService.getList,
      payload: {}
    },
    []
  );
  return (
    <div className={styles.listContainer}>
      {error && <p>{i18next.t(`${HOME_ERROR_MESSAGES.booksList}`)}</p>}
      {loading && <Loading />}
      {state?.page.map(book => (
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
