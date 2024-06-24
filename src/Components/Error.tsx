import React from 'react';
type ErrorProps = {
    closeModal: () => void;
};

const Error: React.FC<ErrorProps> = ({ closeModal }) => {
    return (
        <main className='error'>
            <div className='error_box'>
                <div className='error_content'>
                    <p>No se ha encontrado ningún usuario con ese nombre</p>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        </main>
    )
}

export default Error