
import Proptypes from 'prop-types';
import ReactDom from 'react-dom';
import classes from './modal.module.css';
import {useSelector } from 'react-redux';

const Modal = ({ children, styles }) => {


    const isOpen = useSelector(state=>state.modal.isOpen);

    const OverLay_Styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 1000
    }

 
    {!isOpen && <div> no model</div>}

    return ReactDom.createPortal(
        <>
            <div style={OverLay_Styles}  />
            <div className={`modal ${classes.modal_style}`} style={styles}>
                    {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

//props validation
Modal.propTypes = {
    // isOpen: Proptypes.bool.isRequired,
    children: Proptypes.node.isRequired,
    styles: Proptypes.object
}

export default Modal;

