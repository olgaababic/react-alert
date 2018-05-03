import React from 'react';
import PropTypes from 'prop-types';

import {render} from 'react-dom';
import {Modal} from 'react-bootstrap';

function ReactAlert(props) {

    return (<Modal show={props.showModal}
                   className={props.modalClassName}
    >
        <div className={props.modalContentClassName} style={props.modelContentStyle}>
            {props.title && <Modal.Header>
                <Modal.Title className={props.titleClass}>{props.title}
                    <button type="button" className="close">
                        <span className="glyphicon glyphicon-remove"
                              onClick={() => props.closeModal()}/>
                    </button>
                </Modal.Title>
            </Modal.Header>}
            {props.text &&
            <Modal.Body>{props.text}</Modal.Body>}

            <Modal.Footer>
                {props.showSuccessButton && <div className={props.successButtonWrapperClass}>
                    <button className={props.successButtonClass}
                            onClick={() => {
                                props.successButtonCallBack();
                                if (props.closeAfterAction) {
                                    props.closeModal();
                                }
                            }}>{props.successButtonText}</button>
                </div>}
                {props.showCancelButton && <div className={props.cancelButtonWrapperClass}>
                    <button className={props.cancelButtonClass}
                            onClick={() => {
                                props.cancelButtonCallBack();
                                if (props.closeAfterAction) {
                                    props.closeModal();
                                }
                            }}>{props.cancelButtonText}</button>
                </div>}
            </Modal.Footer>
        </div>
    </Modal>);


}

ReactAlert.defaultProps = {
    modalClassName: "",
    modalContentClassName: "",
    modelContentStyle: null,
    showModal: true,
    title: null,
    titleClass: "react-alert-title",
    text: null,
    showSuccessButton: true,
    successButtonText: "Yes",
    successButtonClass: "fbkr-button blue",
    successButtonWrapperClass: "col-xs-4 col-sm-3 col-md-3 pull-right",
    successButtonCallBack: () => {
    },
    showCancelButton: false,
    cancelButtonText: "No",
    cancelButtonClass: "fbkr-button white",
    cancelButtonWrapperClass: "col-xs-4 col-sm-3 col-md-3 pull-right",
    cancelButtonCallBack: () => {
    },
    closeModal: () => {
    },
    closeAfterAction: true
};

ReactAlert.propTypes = {
    modalClassName: PropTypes.string,
    modalContentClassName: PropTypes.string,
    modelContentStyle: PropTypes.object,
    showModal: PropTypes.bool,
    title: PropTypes.string,
    titleClass: PropTypes.string,
    text: PropTypes.string,
    showSuccessButton: PropTypes.bool,
    successButtonClass: PropTypes.string,
    successButtonWrapperClass: PropTypes.string,
    successButtonText: PropTypes.string,
    successButtonCallBack: PropTypes.func,
    showCancelButton: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    cancelButtonClass: PropTypes.string,
    cancelButtonWrapperClass: PropTypes.string,
    cancelButtonCallBack: PropTypes.func,
    closeModal: PropTypes.func,
    closeAfterAction: PropTypes.bool
};

export default ReactAlert;


// render(<ReactAlert/>, document.getElementById("app"));