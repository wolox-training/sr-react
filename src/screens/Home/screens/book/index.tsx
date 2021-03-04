import React from 'react';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';

import badge from 'assets/badge.png';
import { useRequest } from 'hooks/useRequest';
import BooksService from 'services/BookService';
import Loading from 'components/Spinner/components/loading';
import { BOOK_FIELDS } from 'constants/index';

import BackButton from '../../components/back-button';

import styles from './styles.module.scss';

interface ParamTypes {
  id: string;
}

function Book() {
  const { id } = useParams<ParamTypes>();
  const [state, loading, error] = useRequest(
    {
      request: () => BooksService.getBookInfo(id),
      payload: {}
    },
    [id]
  );
  return (
    <div className={styles.bookContainer}>
      <BackButton path="/home" />
      <div className={styles.bookCardContainer}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <div className={styles.errorContainer}>
                <p className={styles.errorText}>Ha ocurrido un error obteniendo la información del libro</p>
              </div>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <img className={styles.badge} src={badge} alt="badge" />
                  <img className={styles.bookImage} src={state?.imageUrl} alt="book-image" />
                </div>
                <div className={styles.bookInfoContainer}>
                  <div className={styles.bookTitleContainer}>
                    <h2>
                      {state?.title} <span>({state?.genre})</span>
                    </h2>
                  </div>
                  <div className={styles.bookSubtitlesContainer}>
                    <h3>
                      {i18next.t(BOOK_FIELDS.author)} <span>{state?.author}</span>
                    </h3>
                    <h3>
                      {i18next.t(BOOK_FIELDS.editor)} <span>{state?.editor}</span>
                    </h3>
                    <h3>
                      {i18next.t(BOOK_FIELDS.year)} <span>{state?.year}</span>
                    </h3>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Book;
