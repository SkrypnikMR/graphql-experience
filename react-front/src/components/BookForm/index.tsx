import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import './styles.css';
import { CreateBookInput } from '@services/graphql/types';

interface BookFormProps {
    onSubmit: (bookData: CreateBookInput) => void;
    preparedModel?: CreateBookInput;
}

const defaultBookData = { name: '', author: '', description: '' } as const;

export default function BookForm({ onSubmit, preparedModel }: BookFormProps) {
    const [bookData, setBookData] = useState<CreateBookInput>(defaultBookData);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (preparedModel) {
            setBookData(preparedModel);
        }
    }, [preparedModel]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBookData({
            ...bookData,
            [event.target.name]: event.target.value,
        });
    };

    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!bookData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!bookData.author.trim()) {
            newErrors.author = 'Author is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (validate()) {
            onSubmit(bookData);
            setBookData(defaultBookData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={bookData.name} onChange={handleChange} />
                {errors.name && <div> className="error-message"{errors.name}</div>}
            </div>
            <div className="form-field">
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" value={bookData.author} onChange={handleChange} />
                {errors.author && <div className="error-message">{errors.author}</div>}
            </div>
            <div className="form-field">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={bookData.description ?? undefined}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
