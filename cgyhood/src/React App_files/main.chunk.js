(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n  background-color: #ffffff;\n  color: #0eba0b;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.App-header {\n  background-color: #ffff;\n  min-height: 95vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.bor3 {\nfont-size: 20px;    \nfloat:left;\ncolor: #0eba0b;\nbackground-color: #eaebed;\n/*\nborder: inset;\nborder-width: 0.01;\n*/\nbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);\n} \n\n\n.dropdown-menu {\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin: 0 5px;\n\n}\n\n.mapborder{\n \n    margin-left: 10px;\n    margin-right: 10px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_communityController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/communityController.js */ "./src/components/communityController.js");
var _jsxFileName = "/home/giovas/cgyinfo/cgyhood/src/App.js";

 //import Map from './components/Map.js'

 //import HttpsRedirect from 'react-https-redirect'

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Compare Calgary residential communities:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_communityController_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_communityController_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/giovas/cgyinfo/cgyhood/src/components/Map.js";

 //const google = window.google = window.google ? window.google : {} 

class Map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const GoogleMapGio = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
      defaultCenter: this.props.centre,
      defaultZoom: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Polyline"], {
      path: this.props.flightpath,
      options: {
        strokeColor: '#FF0000',
        strokeOpacity: 1,
        strokeWeight: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mapborder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoogleMapGio, {
      containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "300px",
          width: '300px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }),
      mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "90%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/communityController.js":
/*!***********************************************!*\
  !*** ./src/components/communityController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map */ "./src/components/Map.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _offlineData_offlineCommunities_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offlineData/offlineCommunities.json */ "./src/offlineData/offlineCommunities.json");
var _offlineData_offlineCommunities_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../offlineData/offlineCommunities.json */ "./src/offlineData/offlineCommunities.json", 1);
/* harmony import */ var _offlineData_offlineCommunityName_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../offlineData/offlineCommunityName.json */ "./src/offlineData/offlineCommunityName.json");
var _offlineData_offlineCommunityName_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../offlineData/offlineCommunityName.json */ "./src/offlineData/offlineCommunityName.json", 1);
var _jsxFileName = "/home/giovas/cgyinfo/cgyhood/src/components/communityController.js";






class CommunityController extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.dropdwn = () => {
      let content = this.state.dropList;
      let ite = [];
      content.forEach(element => {
        ite.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
          key: element,
          onClick: this.onClickHandler,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, element));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.Toggle, {
        variant: "success",
        id: "dropdown-basic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Select Community"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, ite));
    };

    this.getLocal = value => {
      this.cityData = _offlineData_offlineCommunities_json__WEBPACK_IMPORTED_MODULE_3__;
      let coord;
      let center;

      for (var i = 0; i < this.cityData.length; i++) {
        // look for the entry with a matching `code` value
        if (this.cityData[i].name === value) {
          this.sector = this.cityData[i].sector;
          this.res_cnt = this.cityData[i].res_cnt;
          this.dwell_cnt = this.cityData[i].dwell_cnt;
          this.comm_structure = this.cityData[i].comm_structure;
          coord = this.cityData[i].gcoord;
          center = this.cityData[i].gcenter;
        }
      }

      this.gcoord = JSON.parse(coord);
      this.gcenter = JSON.parse(center);
    };

    this.onClickHandler = event => {
      const value = event.target.innerHTML;
      /*
              let p1 = new Promise(
                  (resolve, reject) => {
                      this.populateData(value)
                  });
              p1.then(
                  function(val) {
                      this.setObtainedValues()
                      console.log(val)
                  }).catch(
                  (reason) => {
                      this.getLocal(value)
                      console.log(reason)
                  });
       */

      let promise3 = new Promise(function (resolve, reject) {
        if (this.populateData(value)) {
          this.setObtainedValues();
        } else {
          this.getLocal(value);
        }
      });
      console.log("pst", this.cityData);
      this.setState({
        comm: value
      });
    };

    this.state = {
      comm: "Community Information:",
      dropList: []
    };
    this.comName = this.props.comName;
    this.cityData = null;
    this.sector = null;
    this.dwell_cnt = null;
    this.comm_structure = null;
    this.gcoord = [];
    this.gcenter = {
      lat: 51.044270,
      lng: -114.062019 //calgary tower

    };
  }

  componentWillMount() {
    this.populateDropdown(); //this.populateData('ALTADORE')
  }

  populateDropdown() {
    //fetch('https://cgyflask-api-heroku.herokuapp.com/community/', {
    fetch('http://127.0.0.1:5000/community/', {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    }).then(r => r.json()).then(r => {
      this.setState({
        dropList: r
      });
    }).catch(err => {
      //console.log(err)
      this.setState({
        dropList: _offlineData_offlineCommunityName_json__WEBPACK_IMPORTED_MODULE_4__
      });
      console.log('default loaded');
    });
  }

  async populateData(comm) {
    //fetch('https://cgyflask-api-heroku.herokuapp.com/community/' + comm + "/", {
    await fetch('http://localhost:5000/community/' + comm + "/", {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    }).then(r => r.json()).then(r => {
      this.cityData = r;
      console.log("hey", r);
      return true;
    }).catch(err => {
      //console.log(err)
      this.cityData = _offlineData_offlineCommunities_json__WEBPACK_IMPORTED_MODULE_3__;
      console.log('default loaded');
      return false;
    });
  }

  setObtainedValues() {
    let coord;
    let center;
    this.sector = this.cityData[0].sector;
    this.res_cnt = this.cityData[0].res_cnt;
    this.dwell_cnt = this.cityData[0].dwell_cnt;
    this.comm_structure = this.cityData[0].comm_structure;
    coord = this.cityData[0].gcoord;
    center = this.cityData[0].gcenter;
    this.gcoord = JSON.parse(coord);
    this.gcenter = JSON.parse(center);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bor3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), this.dropdwn(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, " ", this.state.comm), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Area in the city: ", this.sector), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Number of residents: ", this.res_cnt, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Number of dwellings: ", this.dwell_cnt, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Build around: ", this.comm_structure, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mapborder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
      centre: this.gcenter,
      flightpath: this.gcoord,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CommunityController);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/giovas/cgyinfo/cgyhood/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/offlineData/offlineCommunities.json":
/*!*************************************************!*\
  !*** ./src/offlineData/offlineCommunities.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/offlineData/offlineCommunityName.json":
/*!***************************************************!*\
  !*** ./src/offlineData/offlineCommunityName.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, default */
/***/ (function(module) {

module.exports = ["ABBEYDALE","ACADIA","ALBERT PARK/RADISSON HEIGHTS","ALTADORE","APPLEWOOD PARK","ARBOUR LAKE","ASPEN WOODS","AUBURN BAY","BANFF TRAIL","BANKVIEW","BAYVIEW","BEDDINGTON HEIGHTS","BEL-AIRE","BELMONT","BELTLINE","BELVEDERE","BONAVISTA DOWNS","BOWNESS","BRAESIDE","BRENTWOOD","BRIDGELAND/RIVERSIDE","BRIDLEWOOD","BRITANNIA","CAMBRIAN HEIGHTS","CANYON MEADOWS","CAPITOL HILL","CARRINGTON","CASTLERIDGE","CEDARBRAE","CHAPARRAL","CHARLESWOOD","CHINATOWN","CHINOOK PARK","CHRISTIE PARK","CITADEL","CITYSCAPE","CLIFF BUNGALOW","COACH HILL","COLLINGWOOD","COPPERFIELD","CORAL SPRINGS","CORNERSTONE","COUGAR RIDGE","COUNTRY HILLS","COUNTRY HILLS VILLAGE","COVENTRY HILLS","CRANSTON","CRESCENT HEIGHTS","CRESTMONT","CURRIE BARRACKS","DALHOUSIE","DEER RIDGE","DEER RUN","DIAMOND COVE","DISCOVERY RIDGE","DOUGLASDALE/GLEN","DOVER","DOWNTOWN COMMERCIAL CORE","DOWNTOWN EAST VILLAGE","DOWNTOWN WEST END","EAGLE RIDGE","EAU CLAIRE","EDGEMONT","ELBOW PARK","ELBOYA","ERIN WOODS","ERLTON","EVANSTON","EVERGREEN","FAIRVIEW","FALCONRIDGE","FOREST HEIGHTS","FOREST LAWN","GARRISON GREEN","GARRISON WOODS","GLAMORGAN","GLENBROOK","GLENDALE","GREENVIEW","GREENWOOD/GREENBRIAR","HAMPTONS","HARVEST HILLS","HAWKWOOD","HAYSBORO","HIDDEN VALLEY","HIGHLAND PARK","HIGHWOOD","HILLHURST","HOUNSFIELD HEIGHTS/BRIAR HILL","HUNTINGTON HILLS","INGLEWOOD","KELVIN GROVE","KEYSTONE HILLS","KILLARNEY/GLENGARRY","KINCORA","KINGSLAND","LAKE BONAVISTA","LAKEVIEW","LEGACY","LINCOLN PARK","LIVINGSTON","LOWER MOUNT ROYAL","MACEWAN GLEN","MAHOGANY","MANCHESTER","MAPLE RIDGE","MARLBOROUGH","MARLBOROUGH PARK","MARTINDALE","MAYFAIR","MAYLAND HEIGHTS","MCKENZIE LAKE","MCKENZIE TOWNE","MEADOWLARK PARK","MEDICINE HILL","MIDNAPORE","MILLRISE","MISSION","MONTEREY PARK","MONTGOMERY","MOUNT PLEASANT","NEW BRIGHTON","NOLAN HILL","NORTH GLENMORE PARK","NORTH HAVEN","NORTH HAVEN UPPER","OAKRIDGE","OGDEN","PALLISER","PANORAMA HILLS","PARKDALE","PARKHILL","PARKLAND","PATTERSON","PENBROOKE MEADOWS","PINE CREEK","PINERIDGE","POINT MCKAY","PUMP HILL","QUEENSLAND","QUEENS PARK VILLAGE","RAMSAY","RANCHLANDS","RED CARPET","REDSTONE","RENFREW","RICHMOND","RIDEAU PARK","RIVERBEND","ROCKY RIDGE","ROSEDALE","ROSEMONT","ROSSCARROCK","ROXBORO","ROYAL OAK","RUNDLE","RUTLAND PARK","SADDLE RIDGE","SAGE HILL","SANDSTONE VALLEY","SCARBORO","SCARBORO/ SUNALTA WEST","SCENIC ACRES","SETON","SHAGANAPPI","SHAWNEE SLOPES","SHAWNESSY","SHERWOOD","SIGNAL HILL","SILVERADO","SILVER SPRINGS","SKYVIEW RANCH","SOMERSET","SOUTH CALGARY","SOUTHVIEW","SOUTHWOOD","SPRINGBANK HILL","SPRUCE CLIFF","ST. ANDREWS HEIGHTS","STRATHCONA PARK","SUNALTA","SUNDANCE","SUNNYSIDE","TARADALE","TEMPLE","THORNCLIFFE","TUSCANY","TUXEDO PARK","UNIVERSITY DISTRICT","UNIVERSITY HEIGHTS","UNIVERSITY OF CALGARY","UPPER MOUNT ROYAL","VALLEY RIDGE","VARSITY","VISTA HEIGHTS","WALDEN","WESTGATE","WEST HILLHURST","WEST SPRINGS","WHITEHORN","WILDWOOD","WILLOW PARK","WINDSOR PARK","WINSTON HEIGHTS/MOUNTVIEW","WOLF WILLOW","WOODBINE","WOODLANDS","YORKVILLE"];

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/giovas/cgyinfo/cgyhood/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/giovas/cgyinfo/cgyhood/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map