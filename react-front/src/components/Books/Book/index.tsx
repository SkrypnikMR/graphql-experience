import { useMemo } from 'react';

import { REMOVE_BOOK, UPDATE_BOOK } from '@services/graphql/mutations';
import { GET_ALL_BOOKS } from '@services/graphql/queries';
import { BookEntity, CreateBookInput } from '@services/graphql/types';

import { useModal } from '@hooks/useModal';
import useGraphQLMutation from '@hooks/useGraphQLMutation';

import BookForm from '@components/BookForm';
import Modal from '@components/Modal';

import './style.css';

export default function Book({ name, author, createdAt, updatedAt, description, id }: BookEntity) {
    const [updateBook] = useGraphQLMutation({
        mutation: UPDATE_BOOK,
        options: {
            refetchQueries: [GET_ALL_BOOKS],
        },
    });
    const [removeBook] = useGraphQLMutation({
        mutation: REMOVE_BOOK,
        options: {
            refetchQueries: [GET_ALL_BOOKS],
        },
    });
    const [infoModalVisible, toggleInfoModal] = useModal(false);
    const onBookEdit = async (values: CreateBookInput) => {
        await updateBook({ variables: { book: { ...values, id } } });
        toggleInfoModal();
    };

    const onRemoveBook = async () => {
        await removeBook({ variables: { id } });
    };

    const preparedModel = useMemo(() => ({ name, description, author }), [name, description, author]);

    return (
        <>
            <div className="book-card" onClick={toggleInfoModal}>
                <div className="book-card-back book-card-inner"></div>
                <div className="book-card-pages book-card-inner"></div>
                <div className="book-card-pages book-card-inner"></div>
                <div className="book-card-pages book-card-inner"></div>
                <div className="book-card-pages book-card-inner"></div>
                <div className="book-card-cover book-card-inner book-card-inner-last">
                    <h2 className="book-card-title truncate-text" title={name}>
                        {name}
                    </h2>
                    <p className="book-card-author truncate-text">by {author}</p>
                    <div className="book-card-dates">
                        <span>Created at: {new Date(createdAt).toLocaleDateString()}</span>
                        <span>Updated at: {new Date(updatedAt).toLocaleDateString()}</span>
                    </div>
                    {description && (
                        <p className="book-card-description truncate-text" title="Click to see full description">
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <Modal visible={infoModalVisible} onClose={toggleInfoModal} name="Book info">
                <div className="book-card-modal">
                    <div>
                        <h3>Name: </h3>
                        <span>{name}</span>
                    </div>
                    <div>
                        <h3>Created by: </h3>
                        <span>{author}</span>
                    </div>
                    <div>
                        <h3>Created at: </h3>
                        <span>{new Date(createdAt).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <h3>Updated at: </h3>
                        <span>{new Date(createdAt).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <h3>Description: </h3>
                        <span>{description ?? 'empty'}</span>
                    </div>
                </div>
                <div className="update-form">
                    <h1 title={name}>Here u can change book properties</h1>
                    <BookForm onSubmit={onBookEdit} preparedModel={preparedModel} />
                </div>
                <div className="delete-container">
                    <h1 title={name}>If u want to delete book click here: </h1>
                    <button className="danger-button" onClick={onRemoveBook}>
                        Delete
                    </button>
                </div>
            </Modal>
        </>
    );
}
