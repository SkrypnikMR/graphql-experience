import { useState } from 'react';

type useModalTuple = [boolean, () => void, () => void, () => void];
export function useModal(initialVisible = false): useModalTuple {
    const [visible, setVisible] = useState(initialVisible);

    const toggle = () => setVisible((prev) => !prev);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return [visible, toggle, show, hide];
}
