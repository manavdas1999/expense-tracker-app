import ReactDOM from "react-dom";

const modalElementInDOM = document.getElementById("modals");


const ModalComponent = (props) => {
    return <div className="w-full h-screen z-20 fixed bg-black/75 flex justify-center items-center">

            {props.children}

    </div>
}

const ModalWindow = (props) => {

    return <>
        {
            ReactDOM.createPortal(<ModalComponent>{props.children}</ModalComponent>, modalElementInDOM)
        }
    </>
}



export default ModalWindow;