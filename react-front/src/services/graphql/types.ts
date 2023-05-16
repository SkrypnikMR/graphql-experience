export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: Date;
};

export type BookEntity = {
    __typename?: 'BookEntity';
    author: Scalars['String'];
    createdAt: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type CreateBookInput = {
    author: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createBook: BookEntity;
    removeBook: Scalars['Float'];
    updateBook: BookEntity;
};

export type MutationCreateBookArgs = {
    createBook: CreateBookInput;
};

export type MutationRemoveBookArgs = {
    id: Scalars['String'];
};

export type MutationUpdateBookArgs = {
    updateBook: UpdateBookInput;
};

export type Query = {
    __typename?: 'Query';
    getAllBooks: Array<BookEntity>;
    getOneBook?: Maybe<BookEntity>;
};

export type QueryGetOneBookArgs = {
    id: Scalars['String'];
};

export type UpdateBookInput = {
    author?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
