interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
    title: string;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    return (
        <div className={`modal ${props.modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box w-[300rem] max-w-3xl h-[20rem] flex justify-center items-center">
                <h3 className="font-bold text-5xl absolute left-4 top-2">
                    {props.title}
                </h3>
                <label
                    onClick={() => props.setModalOpen(false)}
                    className="btn absolute right-2 top-2 hover:translate-y-0"
                >
                    ✕
                </label>
                <div className="w-full">{props.children}</div>
            </div>
        </div>
    );
};

export default Modal;
