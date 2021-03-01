export const mockSignUpResponse = {
  id: 123,
  firstName: 'Juan',
  lastName: 'Perez',
  email: 'JP321@yopmail.com',
  locale: 'abc3454@'
};

export const mockLoginResponse = {
  id: 123,
  firstName: 'Juan',
  lastName: 'Perez',
  email: 'JP321@yopmail.com',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
};

export const mockBadRequest = {
  ok: false,
  message: 'Invalid credentials'
};

export const mockBookList = {
  count: 14,
  currentPage: 1,
  nextPage: null,
  page: [
    {
      id: 1,
      author: 'John Miedema',
      title: 'Slow reading',
      imageUrl: 'https://covers.openlibrary.org/b/id/5546156-L.jpg',
      editor: 'Litwin Books',
      year: '2009',
      genre: 'no registra',
      createdAt: '2020-05-07T01:43:29.970Z',
      updatedAt: '2020-05-07T01:43:29.970Z'
    },
    {
      id: 2,
      author: 'Adam West,Jeff Rovin',
      title: 'Back to the Batcave',
      imageUrl: 'https://covers.openlibrary.org/b/id/270628-L.jpg',
      editor: 'Berkley Books',
      year: '1994',
      genre: 'no registra',
      createdAt: '2020-05-07T01:58:19.941Z',
      updatedAt: '2020-05-07T01:58:19.941Z'
    }
  ],
  totalCount: 14,
  totalPages: 1
};

export const mockBadRequestBookList = {
  error: ['You need to sign in or sign up before continuing.']
};
