import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import ModalWrapper from "../ModalWrapper";
import styles from './AddPost.module.scss';
import Image from "./Actions/Image";
import Arrow from "./Actions/Arrow";

const AddPost: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDenyOpened, setIsDenyOpened] = useState<boolean>(false);
    const mainWin = useRef<HTMLDivElement | null>(null);
    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        if (mainWin.current) {
            mainWin.current.style.filter = 'blur(1px)';
        }
        event.preventDefault();
    }

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        if (mainWin.current) {
            mainWin.current.style.filter = '';
        }
        event.preventDefault();
    }

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        if (mainWin.current) {
            mainWin.current.style.filter = '';
        }
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            setSelectedFile(event.dataTransfer.files[0]);
        }
        event.preventDefault();
    }

    const toggleDeny = () => {
        setIsDenyOpened(prev => !prev);
    }

    const clearPost = () : null => {
        if (fileInput.current) {
            fileInput.current.value = '';
        }
        setSelectedFile(null);
        return null;
    }

    const closeFunc = () => {
        // Тут можешь реализовать закрытие модального окна как хочешь
        // Например, передать пропсом из родительского компонента
        // и вызывать его в этой функции
        console.log('Modal close function');
    }

    return (
        <ModalWrapper closeFunc={closeFunc}>
            <div
                ref={mainWin}
                className={styles.mainWin}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <input ref={fileInput} className={styles.fileInput} type="file" accept="image/*" onChange={handleFileChange}/>
                <h2 className={styles.heading}>Creating post</h2>
                {!selectedFile &&
                    <>
                        <Image className={styles.dragImage}/>
                        <p className={styles.dragText}>Drag photo here</p>
                        <button className={styles.chooseBtn} onClick={() => fileInput.current?.click()}>Choose File</button>
                    </>
                }
                {selectedFile && (
                    <>
                        <div className={styles.imageWrapper}>
                            {selectedFile.type.startsWith('image/') ?
                                <img src={URL.createObjectURL(selectedFile)} alt="Image" />
                                :
                                clearPost()
                            }
                        </div>
                        <button onClick={() => setIsDenyOpened(true)} className={styles.backBtn}>
                            <Arrow fill={'white'}/>
                        </button>
                    </>
                )}
                {isDenyOpened &&
                    <ModalWrapper closeFunc={toggleDeny}>
                        <div className={styles.denyWin}>
                            <h3>Deny publication?</h3>
                            <p>Сhanges will be canceled</p>
                            <button className={styles.redBtn} onClick={() => {clearPost(); toggleDeny();}}>Delete</button>
                            <button onClick={toggleDeny}>Cancel</button>
                        </div>
                    </ModalWrapper>
                }
            </div>
        </ModalWrapper>
    );
}

export default AddPost;
