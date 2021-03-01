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
    },
    {
      id: 3,
      author: 'Sin registro',
      title: 'The West Wing',
      imageUrl: 'https://covers.openlibrary.org/b/id/476938-L.jpg',
      editor: 'Pocket',
      year: '8',
      genre: 'Sin registro',
      createdAt: '2020-05-07T03:05:01.219Z',
      updatedAt: '2020-05-07T03:05:01.219Z'
    },
    {
      id: 4,
      author: 'Leslie Kelly',
      title: 'Make Me Over',
      imageUrl: 'https://covers.openlibrary.org/b/id/219859-L.jpg',
      editor: 'Harlequin',
      year: '1',
      genre: 'Sin registro',
      createdAt: '2020-05-07T03:14:31.312Z',
      updatedAt: '2020-05-07T03:14:31.312Z'
    },
    {
      id: 5,
      author: 'Larry R. Laycock',
      title: 'Evergreen miracles',
      imageUrl: 'https://covers.openlibrary.org/b/id/6496994-L.jpg',
      editor: 'Moonwater Productions',
      year: '1996',
      genre: 'Sin registro',
      createdAt: '2020-05-07T03:15:37.140Z',
      updatedAt: '2020-05-07T03:15:37.140Z'
    },
    {
      id: 6,
      author: 'Cara Colter',
      title: 'His mistletoe bride',
      imageUrl: 'https://covers.openlibrary.org/b/id/8228403-L.jpg',
      editor: 'Harlequin',
      year: '2008',
      genre: 'Sin registro',
      createdAt: '2020-05-07T03:18:53.880Z',
      updatedAt: '2020-05-07T03:18:53.880Z'
    },
    {
      id: 7,
      author: 'Piers Anthony',
      title: 'Esrever Doom: A Fun-Fi...',
      imageUrl: 'https://covers.openlibrary.org/b/id/8452533-L.jpg',
      editor: 'Tor Books',
      year: '22',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:12:18.141Z',
      updatedAt: '2020-05-07T12:12:18.141Z'
    },
    {
      id: 8,
      author: 'Cory Doctorow',
      title: 'A Place So Foreign and...',
      imageUrl: 'https://covers.openlibrary.org/b/id/811953-L.jpg',
      editor: 'Four Walls Eight Windows',
      year: '2003',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:12:23.000Z',
      updatedAt: '2020-05-07T12:12:23.000Z'
    },
    {
      id: 9,
      author: 'Piers Anthony',
      title: 'Prostho plus',
      imageUrl: 'https://covers.openlibrary.org/b/id/6951226-L.jpg',
      editor: 'Tom Doherty Associates',
      year: '1986',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:12:56.925Z',
      updatedAt: '2020-05-07T12:12:56.925Z'
    },
    {
      id: 10,
      author: 'Piers Anthony',
      title: 'Volk',
      imageUrl: 'https://covers.openlibrary.org/b/id/1699725-L.jpg',
      editor: 'Xlibris',
      year: '1996',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:14:15.114Z',
      updatedAt: '2020-05-07T12:14:15.114Z'
    },
    {
      id: 11,
      author: 'James S. Hirsch',
      title: 'Two Souls Indivisible',
      imageUrl: 'https://covers.openlibrary.org/b/id/1325156-L.jpg',
      editor: 'Mariner Books',
      year: '3',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:14:44.500Z',
      updatedAt: '2020-05-07T12:14:44.500Z'
    },
    {
      id: 12,
      author: 'Charity Blackstock',
      title: "Witches' Sabbath",
      imageUrl: 'https://covers.openlibrary.org/b/id/6703056-L.jpg',
      editor: 'Paperback Library',
      year: '1967',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:15:07.762Z',
      updatedAt: '2020-05-07T12:15:07.762Z'
    },
    {
      id: 13,
      author: 'Joanna Higgins',
      title: "A soldier's book",
      imageUrl: 'https://covers.openlibrary.org/b/id/837522-L.jpg',
      editor: 'Permanent Press',
      year: '1998',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:17:41.996Z',
      updatedAt: '2020-05-07T12:17:41.996Z'
    },
    {
      id: 14,
      author: 'John Ransom',
      title: 'John Ransoms Diary',
      imageUrl: 'https://covers.openlibrary.org/b/id/8024433-L.jpg',
      editor: 'Berkley',
      year: '1',
      genre: 'Sin registro',
      createdAt: '2020-05-07T12:18:05.141Z',
      updatedAt: '2020-05-07T12:18:05.141Z'
    }
  ],
  totalCount: 14,
  totalPages: 1
};

export const mockBadRequestBookList = {
  error: ['You need to sign in or sign up before continuing.']
};
