"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = require("react-dom");

var _reactBootstrap = require("react-bootstrap");

require("./styles.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var ReactAlert =
/*#__PURE__*/
function (_PureComponent) {
  function ReactAlert() {
    _classCallCheck(this, ReactAlert);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactAlert).apply(this, arguments));
  }

  _createClass(ReactAlert, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_reactBootstrap.Modal, {
        show: this.props.showModal,
        className: "custom-modal"
      }, _react.default.createElement("div", {
        className: "modal-content-container"
      }, this.props.title && _react.default.createElement(_reactBootstrap.Modal.Header, null, _react.default.createElement(_reactBootstrap.Modal.Title, {
        className: this.props.titleClass
      }, this.props.title, _react.default.createElement("span", {
        className: "pull-right glyphicon glyphicon-remove",
        onClick: function onClick() {
          return _this.props.closeModal();
        }
      }))), this.props.text && _react.default.createElement(_reactBootstrap.Modal.Body, null, this.props.text), _react.default.createElement(_reactBootstrap.Modal.Footer, null, this.props.showSuccessButton && _react.default.createElement("div", {
        className: this.props.successButtonWrapperClass
      }, _react.default.createElement("button", {
        className: this.props.successButtonClass,
        onClick: function onClick() {
          _this.props.successButtonCallBack();

          if (_this.props.closeAfterAction) {
            _this.props.closeModal();
          }
        }
      }, this.props.successButtonText)), this.props.showCancelButton && _react.default.createElement("div", {
        className: this.props.cancelButtonWrapperClass
      }, _react.default.createElement("button", {
        className: this.props.cancelButtonClass,
        onClick: function onClick() {
          _this.props.cancelButtonCallBack();

          if (_this.props.closeAfterAction) {
            _this.props.closeModal();
          }
        }
      }, this.props.cancelButtonText)))));
    }
  }]);

  _inherits(ReactAlert, _PureComponent);

  return ReactAlert;
}(_react.PureComponent);

ReactAlert.defaultProps = {
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