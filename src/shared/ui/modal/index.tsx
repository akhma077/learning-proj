import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../../assets/X.svg';

import styles from './index.module.scss';

interface ModalProps extends PropsWithChildren {
    onClose: () => void;
}

export function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        function handleEscapePress(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
        }

        document.body.addEventListener('keydown', handleEscapePress);
        return () => {
            document.body.removeEventListener('keydown', handleEscapePress);
        };
    }, []);

    return createPortal(
        <div className={styles.modal}>
            <div onClick={onClose} className={styles.overlay} />
            <div className={styles.content}>
                <div className={styles.closeIcon}>
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 5.25L5.5 18.75"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M19 18.75L5.5 5.25"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>

                {children}
            </div>
        </div>,
        document.body,
    );
}
