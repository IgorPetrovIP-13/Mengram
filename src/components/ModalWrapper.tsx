import React, { ReactNode, MouseEvent } from 'react'

interface ModalWrapperProps {
    children: ReactNode;
    closeFunc: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, closeFunc }) => {
    const styles: React.CSSProperties = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        closeFunc();
    };

    return (
        <div style={styles} onClick={closeFunc}>
            <div onClick={handleClick}>{children}</div>
        </div>
    );
};

export default ModalWrapper
