import { useEffect, useState } from 'react';

export default function useFakeLoading(timeout = 0) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeoutLink = setTimeout(() => {
            setIsLoading(false);
        }, timeout);

        return () => {
            clearTimeout(timeoutLink);
        };
    }, [timeout]);

    return isLoading;
}
