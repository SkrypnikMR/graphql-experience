import { useRef, useEffect, ReactNode, MouseEvent, useMemo } from 'react';
import './style.css';

interface DialogModalProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode[] | ReactNode;
    name: string;
}

export default function Modal({ visible, onClose, children, name }: DialogModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (visible) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [visible]);

    const handleModalClick = (e: MouseEvent) => e.stopPropagation();

    const elements = useMemo(() => {
        if ((children as ReactNode[])?.length) return [...(children as ReactNode[])];

        return [children as ReactNode];
    }, [children]);

    return (
        <dialog ref={dialogRef} onClick={onClose}>
            <div onClick={handleModalClick}>
                <div id="wrapper">
                    <section className="open-book">
                        <header>
                            <h1>{name}</h1>
                            <div className="close-button">
                                <h6 onClick={onClose}>X</h6>
                            </div>
                        </header>
                        <article>
                            <h2 className="chapter-title">{name}</h2>
                            <dt></dt>
                            <dl>
                                <div className="content-one">{elements[0]}</div>
                            </dl>
                            <dl>
                                <dt></dt>
                                <div className="content-two">{elements[1]}</div>
                            </dl>
                            {elements[2]}
                        </article>
                    </section>
                </div>
            </div>
        </dialog>
    );
}
