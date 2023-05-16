import useGraphQLMutation from '@hooks/useGraphQLMutation';
import {useModal} from "@hooks/useModal";

import { CreateBookInput } from '@services/graphql/types';
import { CREATE_BOOK } from '@services/graphql/mutations';
import { GET_ALL_BOOKS } from '@services/graphql/queries';

import Modal from "@components/Modal";


import './style.css';
import BookForm from "@components/BookForm";

export default function Header() {
    const [createBook] = useGraphQLMutation({
        mutation: CREATE_BOOK,
        options: {
            refetchQueries: [GET_ALL_BOOKS],
        },
    });

    const [createModalVisible, toggleCreateModal] = useModal(false);

    const onCreateSubmit = async (values: CreateBookInput) => {
        await createBook({ variables: { book: { ...values } } });
        toggleCreateModal();
    };

    return (
        <header className="header">
            <div className="header-text">Book app</div>
            <button className="header-button" onClick={toggleCreateModal}>Create book</button>
            <Modal visible={createModalVisible} onClose={toggleCreateModal} name="Create book">
                <div></div>
                <BookForm onSubmit={onCreateSubmit} />
            </Modal>
        </header>
    );
}
