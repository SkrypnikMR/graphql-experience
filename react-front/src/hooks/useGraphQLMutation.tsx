import {
    ApolloCache,
    DefaultContext,
    DocumentNode,
    MutationHookOptions,
    OperationVariables,
    TypedDocumentNode,
    useMutation,
} from '@apollo/client';

interface GraphQLMutationProps {
    mutation: DocumentNode | TypedDocumentNode<any, OperationVariables>;
    options?: MutationHookOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>;
}
export default function useGraphQLMutation({ mutation, options }: GraphQLMutationProps) {
    return useMutation(mutation, options);
}
