webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.7f834cc2eab8f9390c91.hot-update.js.map