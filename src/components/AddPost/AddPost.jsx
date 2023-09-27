import ModalWrapper from "../ModalWrapper";
import styles from './AddPost.module.scss';
import { useState, useRef } from "react";
import Image from "./Actions/Image";
import Arrow from "./Actions/Arrow";

const AddPost = ({callBack}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [postDescription, setPostDescription] = useState('');
    const [isDenyOpened, setIsDenyOpened] = useState(false);
    const mainWin = useRef(null);
    const fileInput = useRef(null);

    const handleFileChange = (event) => {
        event.preventDefault();
        setSelectedFile(event.target.files[0]);
    };

    const handleDragOver = (event) => {
        mainWin.current.style.filter = 'blur(1px)';
        event.preventDefault();
    }

    const handleDragLeave = (event) => {
        mainWin.current.style.filter = '';
        event.preventDefault();
    }

    const handleDrop = (event) => {
        mainWin.current.style.filter = '';
        setSelectedFile(event.dataTransfer.files[0]);
        event.preventDefault();
    }

    const toggleDeny = () => {
        setIsDenyOpened(prev => !prev);
    }

    const clearPost = () => {
        fileInput.current.value = null;
        setPostDescription('');
        setSelectedFile(null);
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
                        <button className={styles.chooseBtn} onClick={() => fileInput.current.click()}>Choose File</button>
                    </>
                }
                {selectedFile && (
                    <>
                        <div className={styles.imageWrapper}>
                            {selectedFile.type.startsWith('image/') ?
                                <img src={URL.createObjectURL(selectedFile)} alt="Image" />
                            : 
                                (clearPost())}
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
                            <button className={styles.redBtn} onClick={() => {clearPost(); toggleDeny();}}>Delele</button>
                            <button onClick={toggleDeny}>Cancel</button>
                        </div>
                    </ModalWrapper>
                }
            </div>
        </ModalWrapper>
    )
}

export default AddPost;