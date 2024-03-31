interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
    title: string;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    return (
        <div
            className={`modal color-white ${
                props.modalOpen ? "modal-open" : ""
            }`}
        >
            <div className="modal-box w-[300rem] max-w-5xl h-[20rem] flex justify-center text-white items-center">
                <h3 className="font-bold text-5xl absolute left-6 top-6">
                    {props.title}
                </h3>
                <label
                    onClick={() => props.setModalOpen(false)}
                    className="btn absolute right-2 top-2 hover:translate-y-0"
                >
                    ✕
                </label>
                <div className="w-full h-full flex flex-row justify-center items-center ">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
