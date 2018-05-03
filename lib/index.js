"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactAlert(props) {
  return _react.default.createElement(_reactBootstrap.Modal, {
    show: props.showModal,
    className: props.modalClassName
  }, _react.default.createElement("div", {
    className: props.modalContentClassName,
    style: props.modelContentStyle
  }, props.title && _react.default.createElement(_reactBootstrap.Modal.Header, null, _react.default.createElement(_reactBootstrap.Modal.Title, {
    className: props.titleClass
  }, props.title, _react.default.createElement("button", {
    type: "button",
    className: "close"
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-remove",
    onClick: function onClick() {
      return props.closeModal();
    }
  })))), props.text && _react.default.createElement(_reactBootstrap.Modal.Body, null, props.text), _react.default.createElement(_reactBootstrap.Modal.Footer, null, props.showSuccessButton && _react.default.createElement("div", {
    className: props.successButtonWrapperClass
  }, _react.default.createElement("button", {
    className: props.successButtonClass,
    onClick: function onClick() {
      props.successButtonCallBack();

      if (props.closeAfterAction) {
        props.closeModal();
      }
    }
  }, props.successButtonText)), props.showCancelButton && _react.default.createElement("div", {
    className: props.cancelButtonWrapperClass
  }, _react.default.createElement("button", {
    className: props.cancelButtonClass,
    onClick: function onClick() {
      props.cancelButtonCallBack();

      if (props.closeAfterAction) {
        props.closeModal();
      }
    }
  }, props.cancelButtonText)))));
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
  successButtonCallBack: function successButtonCallBack() {},
  showCancelButton: false,
  cancelButtonText: "No",
  cancelButtonClass: "fbkr-button white",
  cancelButtonWrapperClass: "col-xs-4 col-sm-3 col-md-3 pull-right",
  cancelButtonCallBack: function cancelButtonCallBack() {},
  closeModal: function closeModal() {},
  closeAfterAction: true
};
ReactAlert.propTypes = {
  modalClassName: _propTypes.default.string,
  modalContentClassName: _propTypes.default.string,
  modelContentStyle: _propTypes.default.object,
  showModal: _propTypes.default.bool,
  title: _propTypes.default.string,
  titleClass: _propTypes.default.string,
  text: _propTypes.default.string,
  showSuccessButton: _propTypes.default.bool,
  successButtonClass: _propTypes.default.string,
  successButtonWrapperClass: _propTypes.default.string,
  successButtonText: _propTypes.default.string,
  successButtonCallBack: _propTypes.default.func,
  showCancelButton: _propTypes.default.bool,
  cancelButtonText: _propTypes.default.string,
  cancelButtonClass: _propTypes.default.string,
  cancelButtonWrapperClass: _propTypes.default.string,
  cancelButtonCallBack: _propTypes.default.func,
  closeModal: _propTypes.default.func,
  closeAfterAction: _propTypes.default.bool
};
var _default = ReactAlert; // render(<ReactAlert/>, document.getElementById("app"));

exports.default = _default;