import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const BOOKS_QUERY = gql`
  {
    books {
      title
      author
    }
  }
`;

interface Book {
  id: number,
  title: string;
  author: string;
};

const App: React.FC = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) {
    return <div>{loading}</div>
  };

  if (error) {
    return <div>Error while getting data</div>;
  }

  console.log(data)

  return (
    <div>
      {
        data.books.map((element:Book) => {
          const { id, title, author } = element;
          return (
            <Fragment key={id}>
              <div>
                <div>Title: {title}</div>
                <div>Author: {author}</div>
              </div>
              <hr />
            </Fragment>
          );
        })
      }
    </div>
  );
}

export default App;
