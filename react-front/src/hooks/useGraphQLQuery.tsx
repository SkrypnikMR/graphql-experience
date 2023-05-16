import { useMemo } from 'react';
import { useQuery } from '@apollo/client';

interface useGraphQLQueryProps {
    query: never;
    dataKey: string;
}
export function useGraphQlQuery<T, Q>({ query, dataKey }: useGraphQLQueryProps) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore next-line
    const response = useQuery(query as Q);

    const mappedResponse = useMemo(
        () => ({
            ...response,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            data: response?.data?.[dataKey] as T,
        }),
        [response],
    );

    return mappedResponse;
}
