webpackHotUpdate("static/development/pages/feed/[subreddits].js",{

/***/ "./pages/feed/[subreddits].js":
/*!************************************!*\
  !*** ./pages/feed/[subreddits].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_PostSwiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/PostSwiper */ "./components/PostSwiper.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.jsx");





var _jsxFileName = "/Users/Chris/Projects/eggplant-tv/pages/feed/[subreddits].js";










var FeedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "subreddits__FeedWrapper",
  componentId: "sc-78bo8g-0"
})({}, styled_system__WEBPACK_IMPORTED_MODULE_7__["color"], styled_system__WEBPACK_IMPORTED_MODULE_7__["space"], styled_system__WEBPACK_IMPORTED_MODULE_7__["layout"]);

var Feed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Feed, _Component);

  function Feed(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Feed);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Feed).call(this, props));
    _this.state = {
      subreddits: [],
      posts: [],
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Feed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      var query = router.query;
      var subreddits = query.subreddits;
      console.log(subreddits);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://www.reddit.com/r/".concat(subreddits, "/.json"), {
        crossdomain: true
      }).then(function (response) {
        // handle success
        console.log(response);
        var posts = response.data.data.children;
        console.log(posts);
        this.setState({
          posts: posts
        });
      }.bind(this))["catch"](function (error) {
        // handle error
        console.log(error);
      })["finally"](function () {// always executed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.state.posts;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FeedWrapper, {
        bg: "#000",
        color: "#fff",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, posts.length > 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PostSwiper__WEBPACK_IMPORTED_MODULE_13__["default"], {
        posts: posts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }]);

  return Feed;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Feed));

/***/ })

})
//# sourceMappingURL=[subreddits].js.3d243e827055f717d399.hot-update.js.map