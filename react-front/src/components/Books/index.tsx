import { GET_ALL_BOOKS } from '@services/graphql/queries';
import { BookEntity } from '@services/graphql/types';
import { useGraphQlQuery } from '@hooks/useGraphQLQuery';
import useFakeLoading from '@hooks/useFakeLoading';
import Loader from '@components/Loader';

import Book from './Book';
import './style.css';

export default function Books() {
    const { data: books, loading } = useGraphQlQuery<BookEntity[], typeof GET_ALL_BOOKS>({
        query: GET_ALL_BOOKS as never,
        dataKey: 'getAllBooks',
    });
    const fakeLoadingForShow = useFakeLoading(2000);

    return (
        <div className="container">
            {loading || fakeLoadingForShow ? (
                <Loader />
            ) : (
                books.map(({ id, name, author, description, createdAt, updatedAt }) => (
                    <Book
                        key={id}
                        id={id}
                        name={name}
                        author={author}
                        description={description}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                ))
            )}
        </div>
    );
}
