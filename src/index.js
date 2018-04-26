import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {render} from 'react-dom';
import {Modal} from 'react-bootstrap';

class ReactAlert extends PureComponent {
    render() {
        return (<Modal show={this.props.showModal}
                       className="custom-modal"
        >
            <div className="modal-content-container">
                {this.props.title && <Modal.Header>
                    <Modal.Title className={this.props.titleClass}>{this.props.title}
                        <span className="pull-right glyphicon glyphicon-remove"
                              onClick={() => this.props.closeModal()}/>
                    </Modal.Title>
                </Modal.Header>}
                {this.props.text &&
                <Modal.Body>{this.props.text}</Modal.Body>}

                <Modal.Footer>
                    {this.props.showSuccessButton && <div className={this.props.successButtonWrapperClass}>
                        <button className={this.props.successButtonClass}
                                onClick={() => {
                                    this.props.successButtonCallBack();
                                    if (this.props.closeAfterAction) {
                                        this.props.closeModal();
                                    }
                                }}>{this.props.successButtonText}</button>
                    </div>}
                    {this.props.showCancelButton && <div className={this.props.cancelButtonWrapperClass}>
                        <button className={this.props.cancelButtonClass}
                                onClick={() => {
                                    this.props.cancelButtonCallBack();
                                    if (this.props.closeAfterAction) {
                                        this.props.closeModal();
                                    }
                                }}>{this.props.cancelButtonText}</button>
                    </div>}
                </Modal.Footer>
            </div>
        </Modal>);
    }

}

ReactAlert.defaultProps = {
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