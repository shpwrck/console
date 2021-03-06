(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js-old/components/datasource/DataSource.js":
/*!**************************************************************!*\
  !*** ./resources/js-old/components/datasource/DataSource.js ***!
  \**************************************************************/
/*! exports provided: DataSource, DataSourceContext, DataSourceConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceContext", function() { return DataSourceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceConsumer", function() { return DataSourceConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./resources/js-old/components/datasource/search/index.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ "./resources/js-old/components/datasource/sort/index.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./resources/js-old/components/datasource/filter/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order */ "./resources/js-old/components/datasource/order/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







 // import { SelectableContext } from "./selectable";


var DataSourceContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var DataSourceProvider = DataSourceContext.Provider;
var DataSourceConsumer = DataSourceContext.Consumer;
/**
 * list() -> List items
 * GET /<api>
 *
 * get() -> get item
 * GET /<api>/<id>
 *
 * save() -> save item
 * POST /<source>/<id>
 *
 * delete() -> delete item
 * DELETE /<source>/<id>
 *
 */

var DataSource = /*#__PURE__*/function (_React$Component) {
  _inherits(DataSource, _React$Component);

  var _super = _createSuper(DataSource);

  function DataSource(props) {
    var _this;

    _classCallCheck(this, DataSource);

    _this = _super.call(this, props);
    _this.state = {
      source: null,
      id: null,
      items: [],
      total: 0,
      count: 0,
      queryParams: {},
      itemsLoading: true,
      itemsDownloading: false,
      more: true,
      item: null,
      file: null,
      itemLoading: false,
      itemChanged: false
    };
    _this.getItems = _this.getItems.bind(_assertThisInitialized(_this));
    _this.downloadItems = _this.downloadItems.bind(_assertThisInitialized(_this));
    _this.refreshItems = _this.refreshItems.bind(_assertThisInitialized(_this));
    _this.getItem = _this.getItem.bind(_assertThisInitialized(_this));
    _this.resetItem = _this.resetItem.bind(_assertThisInitialized(_this));
    _this.unsetItem = _this.unsetItem.bind(_assertThisInitialized(_this));
    _this.changeItem = _this.changeItem.bind(_assertThisInitialized(_this));
    _this.saveItem = _this.saveItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.attachFile = _this.attachFile.bind(_assertThisInitialized(_this));
    _this.setQueryParams = _this.setQueryParams.bind(_assertThisInitialized(_this));
    _this.reorderById = _this.reorderById.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DataSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          source = _this$props.source,
          id = _this$props.id,
          sort_by = _this$props.sort_by,
          filter = _this$props.filter,
          limit = _this$props.limit; // this.setState({
      //     source: source,
      //     id: id
      // });

      id ? this.getItem(id) : this.setQueryParams({
        sort_by: sort_by // filter: filter,
        // limit: limit

      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // console.log('## ListContext update: ', prevState, '=>', this.state)
      // console.log('## ListContext update: ', prevProps, '=>', this.props)
      //
      var _this$props2 = this.props,
          source = _this$props2.source,
          id = _this$props2.id;

      if (prevProps.source !== source) {
        // reloading items
        this.getItems();
      }

      if (prevProps.id !== id) {
        // reloading item
        this.get(id);
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
    /**
     * Sets the query params for the list request.
     */

  }, {
    key: "setQueryParams",
    value: function setQueryParams(params) {
      var queryParams = {};

      if (params.sort_by !== undefined) {
        queryParams = {
          sort_by: Object.fromEntries(params.sort_by.map(function (s) {
            return [s.name, s.direction];
          }))
        };
      }

      if (params.filter !== undefined) {
        queryParams = _objectSpread({}, queryParams, {
          filter: params.filter
        });
      } // if (params.limit !== undefined) {
      //     queryParams = {
      //         ...queryParams, limit: params.limit
      //     };
      // }


      if (params.search !== undefined) {
        queryParams = _objectSpread({}, queryParams, {
          search: params.search
        });
      }

      this.setState({
        items: [],
        queryParams: _objectSpread({}, this.state.queryParams, {}, queryParams)
      }, this.refreshItems);
    }
  }, {
    key: "getItems",
    value: function getItems(fn) {
      var _this2 = this;

      var _this$props3 = this.props,
          source = _this$props3.source,
          limit = _this$props3.limit;
      var _this$state = this.state,
          items = _this$state.items,
          count = _this$state.count,
          queryParams = _this$state.queryParams;
      if (!source) return false;
      var offset = items.length;

      if (offset < 0) {
        offset = 0;
      }

      if (offset > 0 && offset >= count) {
        this.setState({
          more: false
        });
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(source, {
        params: _objectSpread({}, queryParams, {
          offset: offset,
          limit: limit
        }),
        paramsSerializer: qs__WEBPACK_IMPORTED_MODULE_3___default.a.stringify
      }).then(function (response) {
        var items = response.data.items;

        _this2.setState({
          items: items.map(function (item) {
            return _objectSpread({}, item.spec, {
              name: item.metadata.name
            });
          }),
          total: items.length,
          count: items.length,
          itemsLoading: false // more: (meta.total > 0)

        }, function () {
          return typeof fn === 'function' && fn();
        });
      })["catch"](function (error) {});
    }
  }, {
    key: "refreshItems",
    value: function refreshItems(fn) {
      var _this3 = this;

      this.setState({
        items: [],
        total: 0,
        count: 0,
        itemsLoading: true
      }, function () {
        return _this3.getItems(fn);
      });
    }
  }, {
    key: "downloadItems",
    value: function downloadItems() {
      var _this4 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var source = this.props.source;
      var queryParams = this.state.queryParams;
      this.setState({
        itemsDownloading: true
      }, function () {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(source + '/' + type, {
          responseType: 'blob',
          params: _objectSpread({}, queryParams),
          paramsSerializer: qs__WEBPACK_IMPORTED_MODULE_3___default.a.stringify
        }).then(function (response) {
          var url = window.URL.createObjectURL(new Blob([response.data]));
          var filename = response.request.getResponseHeader('Content-Disposition').match(/filename="(.+)"/)[1];
          var link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
          link.remove();

          _this4.setState({
            itemsDownloading: false
          });
        })["catch"](function (error) {
          return null;
        });
      });
    }
  }, {
    key: "getItem",
    value: function getItem(id) {
      var _this5 = this;

      var source = this.props.source;
      this.setState({
        itemLoading: true,
        itemChanged: false
      }, function () {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(source + '/' + id).then(function (_ref) {
          var data = _ref.data;
          return _this5.setState({
            item: DataSource.sanitize(data),
            itemLoading: false
          });
        });
      });
    }
  }, {
    key: "attachFile",
    value: function attachFile(file) {
      this.setState({
        file: file
      });
    }
  }, {
    key: "resetItem",
    value: function resetItem() {
      var item = this.props.item;
      if (!item.id) return;
      this.getItem(item.id);
    }
  }, {
    key: "unsetItem",
    value: function unsetItem() {
      this.setState({
        item: null,
        itemLoading: false,
        itemChanged: false,
        itemSaved: false
      });
    }
  }, {
    key: "changeItem",
    value: function changeItem(value) {
      // console.log('c',changed.target.name,changed.target.value)
      var changedValue = {};

      if (value.target) {
        changedValue[value.target.name] = value.target.value;
      } else {
        changedValue = value;
      }

      this.setState({
        item: _objectSpread({}, this.state.item, {}, changedValue),
        itemChanged: true,
        itemSaved: false
      });
    }
  }, {
    key: "saveItem",
    value: function saveItem(item, fn) {
      var _this6 = this;

      var source = this.props.source;
      var file = this.state.file;
      var postData = new FormData();

      for (var _i = 0, _Object$keys = Object.keys(item); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (!key) continue;
        postData.append(key, item[key]);
      }

      if (file) {
        postData.append('file', file);
      }

      if (item.id) {
        this.setState({
          itemChanged: false
        }, function () {
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(source + '/' + item.id, postData).then(function (_ref2) {
            var data = _ref2.data;
            return _this6.setState({
              item: DataSource.sanitize(data),
              itemSaved: true
            }, function () {
              return _this6.refreshItems(fn);
            });
          })["catch"](function () {
            return _this6.setState({
              itemChanged: true,
              itemSaved: false
            });
          });
        });
      } else {
        this.setState({
          itemChanged: false
        }, function () {
          return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(source, postData).then(function (_ref3) {
            var data = _ref3.data;
            return _this6.setState({
              item: DataSource.sanitize(data),
              itemSaved: true
            }, function () {
              return _this6.refreshItems(fn);
            });
          })["catch"](function () {
            return _this6.setState({
              itemChanged: true,
              itemSaved: false
            });
          });
        });
      }
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(id) {
      var _this7 = this;

      var source = this.props.source;
      this.setState({
        itemChanged: false,
        itemLoading: true
      }, function () {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"](source + '/' + id).then(function () {
          _this7.setState({
            itemLoading: false
          }, _this7.refreshItems);
        })["catch"](function () {
          return _this7.setState({
            itemChanged: true,
            itemLoading: false
          });
        });
      });
    }
  }, {
    key: "reorderById",
    value: function reorderById(ids) {
      // reorders items by the given array of ids
      var items = this.state.items;
      var identifier = this.props.identifier;
      var ordered = ids.map(function (id) {
        return items.find(function (item) {
          return item[identifier] === id;
        });
      }); // console.log(ordered.map(o => o.id))

      this.setState({
        items: ordered
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var children = this.props.children;
      var _this$props4 = this.props,
          source = _this$props4.source,
          identifier = _this$props4.identifier,
          limit = _this$props4.limit,
          currentId = _this$props4.currentId,
          searchable = _this$props4.searchable,
          filterable = _this$props4.filterable,
          sortable = _this$props4.sortable,
          orderable = _this$props4.orderable;
      var _this$state2 = this.state,
          items = _this$state2.items,
          total = _this$state2.total,
          count = _this$state2.count,
          itemsLoading = _this$state2.itemsLoading,
          itemsDownloading = _this$state2.itemsDownloading,
          more = _this$state2.more,
          queryParams = _this$state2.queryParams,
          item = _this$state2.item,
          itemLoading = _this$state2.itemLoading,
          itemChanged = _this$state2.itemChanged,
          itemSaved = _this$state2.itemSaved,
          error = _this$state2.error,
          errorInfo = _this$state2.errorInfo;

      if (error) {
        return error + ' ' + errorInfo;
      }

      if (searchable) {
        var search = this.props.search;
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_4__["Searchable"], {
          source: source,
          search: search,
          setQueryParams: this.setQueryParams
        }, children);
      }

      if (sortable) {
        var sort_by = this.props.sort_by;
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sort__WEBPACK_IMPORTED_MODULE_5__["Sortable"], {
          source: source,
          sort_by: sort_by,
          setQueryParams: this.setQueryParams
        }, children);
      }

      if (filterable) {
        var filter = this.props.filter;
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter__WEBPACK_IMPORTED_MODULE_6__["Filterable"], {
          source: source,
          filter: filter,
          setQueryParams: this.setQueryParams
        }, children);
      } //
      // if (selectable) {
      //     children = <SelectableContext identifier={identifier}>{children}</SelectableContext>;
      // }
      //


      if (orderable) {
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_order__WEBPACK_IMPORTED_MODULE_7__["Orderable"], {
          source: source,
          identifier: identifier,
          items: items,
          handleReorder: function handleReorder(items) {
            return _this8.setState({
              items: items
            });
          }
        }, children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataSourceProvider, {
        value: {
          identifier: identifier,
          source: source,
          items: items,
          total: total,
          count: count,
          itemsLoading: itemsLoading,
          itemsDownloading: itemsDownloading,
          more: more,
          item: item,
          itemLoading: itemLoading,
          itemChanged: itemChanged,
          itemSaved: itemSaved,
          limit: limit,
          currentId: currentId,
          setQueryParams: this.setQueryParams,
          queryParams: queryParams,
          getItems: this.getItems,
          downloadItems: this.downloadItems,
          refreshItems: this.refreshItems,
          getItem: this.getItem,
          resetItem: this.resetItem,
          unsetItem: this.unsetItem,
          changeItem: this.changeItem,
          saveItem: this.saveItem,
          deleteItem: this.deleteItem,
          attachFile: this.attachFile,
          // appendItem: (item) => this.setState({ items: items.concat([item]) }),
          // removeItem: (id) => this.setState({ items: items.filter(item => item[identifier] !== id) }),
          // loading: loading,
          // selectable: selectable,
          // sortable: sortable,
          // searchable: searchable,
          orderable: orderable
        }
      }, children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.source !== state.source || props.id !== state.id) {
        return {
          source: props.source,
          id: props.id,
          items: [],
          data: [],
          total: 0,
          count: 0,
          queryParams: {},
          itemsLoading: true,
          more: true,
          item: null,
          itemLoading: false,
          itemChanged: false,
          itemSaved: false
        };
      }

      return null;
    }
  }, {
    key: "sanitize",
    value: function sanitize(data) {
      /**
       * see:
       * https://github.com/facebook/react/issues/11417
       * https://github.com/reactjs/rfcs/pull/53
       *
       */
      Object.keys(data).forEach(function (key, idx) {
        if (data[key] === null) {
          data[key] = '';
        }
      });
      return data;
    }
  }]);

  return DataSource;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DataSource.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sort_by: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['asc', 'desc'])
  })),
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  sortable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  searchable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
DataSource.defaultProps = {
  identifier: 'name',
  sort_by: [],
  filter: {},
  limit: 30,
  sortable: false,
  filterable: false,
  selectable: false,
  searchable: false
};


/***/ }),

/***/ "./resources/js-old/components/datasource/components/Select.js":
/*!*********************************************************************!*\
  !*** ./resources/js-old/components/datasource/components/Select.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var MultipleSelectedValue = function MultipleSelectedValue(_ref) {
  var value = _ref.value,
      labelKey = _ref.labelKey,
      onRemove = _ref.onRemove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    onClick: function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      onRemove(value);
    },
    onFocus: function onFocus(event) {
      return event.stopPropagation();
    },
    plain: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    align: "center",
    direction: "row",
    gap: "xsmall",
    pad: {
      vertical: "xsmall",
      horizontal: "small"
    },
    margin: "xsmall",
    background: "neutral-3",
    round: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "small",
    color: "white"
  }, value[labelKey]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    background: "white",
    round: "full",
    margin: {
      left: "xsmall"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["FormClose"], {
    color: "brand",
    size: "small"
  }))));
};

var SelectedValue = function SelectedValue(_ref2) {
  var value = _ref2.value,
      labelKey = _ref2.labelKey,
      onRemove = _ref2.onRemove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pad: {
      vertical: "xsmall",
      horizontal: "xsmall"
    },
    margin: "xsmall",
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    onClick: function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      onRemove(value);
    },
    onFocus: function onFocus(event) {
      return event.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["FormClose"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Text"], null, value[labelKey]));
};

var Placeholder = function Placeholder(_ref3) {
  var placeholder = _ref3.placeholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pad: {
      vertical: "xsmall",
      horizontal: "small"
    },
    margin: "xsmall"
  }, placeholder, "\xA0");
};

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    _this.state = {
      options: [],
      count: 0,
      total: 0,
      // holds the filtered options
      // when searching
      searchText: '',
      search: [],
      // mixed value (array or value)
      selected: ''
    };
    _this.selectValue = _this.selectValue.bind(_assertThisInitialized(_this));
    _this.removeValue = _this.removeValue.bind(_assertThisInitialized(_this));
    _this.loadOptions = _this.loadOptions.bind(_assertThisInitialized(_this));
    _this.setSelected = _this.setSelected.bind(_assertThisInitialized(_this));
    _this.search = _this.search.bind(_assertThisInitialized(_this));
    _this.localSearch = _this.localSearch.bind(_assertThisInitialized(_this));
    _this.remoteSearch = _this.remoteSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadOptions();
    }
  }, {
    key: "loadOptions",
    value: function loadOptions() {
      var _this2 = this;

      var _this$props = this.props,
          source = _this$props.source,
          limit = _this$props.limit,
          labelKey = _this$props.labelKey,
          valueKey = _this$props.valueKey;
      var _this$state = this.state,
          options = _this$state.options,
          count = _this$state.count,
          total = _this$state.total,
          searchText = _this$state.searchText;
      var offset = options.length;

      if (offset < 0) {
        offset = 0;
      }

      if (offset > 0 && offset >= count) {
        this.setState({
          more: false
        });
        return;
      }

      var params = {};

      if (searchText) {
        params = {
          search: searchText
        };
      }

      if (limit) {
        params = _objectSpread({
          offset: offset,
          limit: limit
        }, params);
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(source, {
        params: _objectSpread({
          fields: [labelKey, valueKey]
        }, params)
      }).then(function (response) {
        var _response$data = response.data,
            data = _response$data.data,
            meta = _response$data.meta;
        var result = data.map(function (s) {
          var _ref4;

          return _ref4 = {}, _defineProperty(_ref4, valueKey, s[valueKey]), _defineProperty(_ref4, labelKey, s[labelKey]), _ref4;
        });

        _this2.setState({
          options: limit ? options.concat(result) : result,
          total: meta.total,
          count: meta.count //itemsLoading: false,
          // more: (meta.total > 0)

        }, _this2.setSelected);
      });
    }
  }, {
    key: "setSelected",
    value: function setSelected() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          valueKey = _this$props2.valueKey,
          multiple = _this$props2.multiple;
      var options = this.state.options;

      if (value && !Array.isArray(value)) {
        this.setState({
          selected: options.find(function (o) {
            return o[valueKey] === value;
          })
        });
      }
    }
  }, {
    key: "removeValue",
    value: function removeValue(value) {
      var _this$props3 = this.props,
          valueKey = _this$props3.valueKey,
          multiple = _this$props3.multiple,
          onRemove = _this$props3.onRemove;
      var selected = this.state.selected; // console.log(selected.findIndex(s => s[valueKey] === value[valueKey]))
      // console.log(selected.splice(selected.findIndex(s => s[valueKey] === value[valueKey]), 1) )

      var selectedValues = '';

      if (multiple) {
        if (selected.length === 1) {
          selectedValues = [];
        } else {
          selectedValues = selected.splice(selected.findIndex(function (s) {
            return s[valueKey] === value[valueKey];
          }), 1);
        }
      }

      this.setState({
        selected: selectedValues
      }, function () {
        return onRemove && onRemove(value[valueKey]);
      });
    }
  }, {
    key: "selectValue",
    value: function selectValue(_ref5) {
      var value = _ref5.value,
          option = _ref5.option;
      var _this$props4 = this.props,
          onSelect = _this$props4.onSelect,
          valueKey = _this$props4.valueKey;
      this.setState({
        selected: value
      }, function () {
        return onSelect && onSelect(option[valueKey]);
      });
    }
  }, {
    key: "search",
    value: function search(text) {
      var limit = this.props.limit;
      limit ? this.remoteSearch(text) : this.localSearch(text);
    }
  }, {
    key: "remoteSearch",
    value: function remoteSearch(text) {
      this.setState({
        searchText: text,
        options: [],
        total: 0,
        count: 0
      }, this.loadOptions);
    }
  }, {
    key: "localSearch",
    value: function localSearch(text) {
      var options = this.state.options;
      var labelKey = this.props.labelKey; // search within local options
      // The line below escapes regular expression special characters:
      // [ \ ^ $ . | ? * + ( )

      var escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&"); // Create the regular expression with modified value which
      // handles escaping special characters. Without escaping special
      // characters, errors will appear in the console

      var exp = new RegExp(escapedText, "i");
      this.setState({
        search: text ? options.filter(function (o) {
          return exp.test(o[labelKey]);
        }) : []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          name = _this$props5.name,
          label = _this$props5.label,
          placeholder = _this$props5.placeholder,
          labelKey = _this$props5.labelKey,
          valueKey = _this$props5.valueKey,
          multiple = _this$props5.multiple,
          onSelect = _this$props5.onSelect,
          onRemove = _this$props5.onRemove,
          value = _this$props5.value,
          props = _objectWithoutProperties(_this$props5, ["name", "label", "placeholder", "labelKey", "valueKey", "multiple", "onSelect", "onRemove", "value"]);

      var _this$state2 = this.state,
          options = _this$state2.options,
          selected = _this$state2.selected,
          search = _this$state2.search;
      var s = {};

      if (value) {
        if (!multiple) {
          s[valueKey] = value[0];
        }
      } // console.log(multiple)
      // console.log('selected',selected)
      // console.log('value',value)


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Select"], _extends({
        name: name,
        label: label,
        labelKey: labelKey,
        options: search.length ? search : options,
        onMore: this.loadOptions,
        value: selected || '',
        valueKey: valueKey,
        valueLabel: multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          wrap: true,
          direction: "row"
        }, selected && selected.length ? selected.map(function (v) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultipleSelectedValue, {
            key: 'opt' + v[valueKey],
            labelKey: labelKey,
            value: v,
            onRemove: _this3.removeValue
          });
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, {
          placeholder: placeholder
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], null, selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedValue, {
          value: selected,
          labelKey: labelKey,
          onRemove: this.removeValue
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, {
          placeholder: placeholder
        })),
        onSearch: this.search,
        multiple: multiple,
        onChange: this.selectValue,
        emptySearchMessage: "",
        searchPlaceholder: ""
      }, props), function (option, index, options, state) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          pad: "small",
          background: state.selected ? 'neutral-3' : ''
        }, option[labelKey]);
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // if (props.value !== state.selected) {
      //     return {
      //         selected: props.value
      //     }
      // }
      return null;
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Select.defaultProps = {
  labelKey: 'name',
  valueKey: 'id'
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./resources/js-old/components/datasource/components/index.js":
/*!********************************************************************!*\
  !*** ./resources/js-old/components/datasource/components/index.js ***!
  \********************************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./resources/js-old/components/datasource/components/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js-old/components/datasource/filter/EnaledFilter.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/EnaledFilter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _SelectFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectFilter */ "./resources/js-old/components/datasource/filter/SelectFilter.js");



var defaultOptions = [{
  label: 'Enabled',
  value: 1,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusGood"], {
    color: "status-ok"
  })
}, {
  label: 'Disabled',
  value: 0,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusDisabled"], {
    color: "status-disabled"
  })
}];

var EnabledFilter = function EnabledFilter(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Enabled filter" : _ref$label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "enabled" : _ref$name,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? defaultOptions : _ref$options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    name: name,
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EnabledFilter);

/***/ }),

/***/ "./resources/js-old/components/datasource/filter/FilterSelect.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/FilterSelect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./resources/js-old/components/datasource/components/index.js");
/* harmony import */ var _Filterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filterable */ "./resources/js-old/components/datasource/filter/Filterable.js");




var FilterSelect = function FilterSelect(_ref) {
  var name = _ref.name,
      label = _ref.label,
      source = _ref.source,
      limit = _ref.limit,
      multiple = _ref.multiple,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filterable__WEBPACK_IMPORTED_MODULE_2__["FilterableConsumer"], null, function (_ref2) {
    var filter = _ref2.filter,
        addFilter = _ref2.addFilter,
        setFilter = _ref2.setFilter,
        removeFilter = _ref2.removeFilter,
        clearFilter = _ref2.clearFilter;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      name: name,
      label: label,
      value: filter[name],
      source: source,
      limit: limit,
      onSelect: function onSelect(value) {
        return multiple ? addFilter(name, value) : setFilter(name, value);
      },
      onRemove: function onRemove(value) {
        return multiple ? removeFilter(name, value) : removeFilter(name);
      },
      multiple: multiple,
      labelKey: labelKey,
      valueKey: valueKey
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FilterSelect);

/***/ }),

/***/ "./resources/js-old/components/datasource/filter/Filterable.js":
/*!*********************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/Filterable.js ***!
  \*********************************************************************/
/*! exports provided: Filterable, FilterableContext, FilterableConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filterable", function() { return Filterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterableContext", function() { return FilterableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterableConsumer", function() { return FilterableConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./resources/js-old/components/datasource/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FilterableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  filter: {}
});
var FilterableProvider = FilterableContext.Provider;
var FilterableConsumer = FilterableContext.Consumer;

var Filterable = /*#__PURE__*/function (_React$Component) {
  _inherits(Filterable, _React$Component);

  var _super = _createSuper(Filterable);

  function Filterable(props) {
    var _this;

    _classCallCheck(this, Filterable);

    _this = _super.call(this, props);
    _this.state = {
      filter: props.filter !== undefined ? props.filter : {}
    };
    _this.hash = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hash"])(props.source);
    _this.apply = _this.apply.bind(_assertThisInitialized(_this));
    _this.setFilter = _this.setFilter.bind(_assertThisInitialized(_this));
    _this.addFilter = _this.addFilter.bind(_assertThisInitialized(_this));
    _this.removeFilter = _this.removeFilter.bind(_assertThisInitialized(_this));
    _this.clearFilter = _this.clearFilter.bind(_assertThisInitialized(_this));
    _this.hasFilter = _this.hasFilter.bind(_assertThisInitialized(_this));
    _this.countFilter = _this.countFilter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Filterable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var filter = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getSession"])(this.hash, 'filter');

      if (filter) {
        this.apply({
          filter: filter
        });
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "apply",
    value: function apply(state) {
      var _this2 = this;

      this.setState(state, function () {
        _this2.props.setQueryParams(state);

        Object(_util__WEBPACK_IMPORTED_MODULE_2__["setSession"])(_this2.hash, 'filter', state.filter);
      });
    }
    /**
     * Updates filter name with the content of value
     * value must be an array of values or a string
     * @param name
     * @param value
     */

  }, {
    key: "setFilter",
    value: function setFilter(name, value) {
      var filter = this.state.filter;
      this.apply({
        filter: _objectSpread({}, filter, _defineProperty({}, name, value))
      });
    }
    /**
     * Add a filter as filter[name][]=value
     */

  }, {
    key: "addFilter",
    value: function addFilter(name, value) {
      var filter = this.state.filter; // console.log(name,value)
      // let f = [];
      // if (filter[name]) {
      //     f = filter[name];
      // }

      if (filter[name] === undefined) {
        filter[name] = [];
      }

      if (filter[name].find(function (f) {
        return f === value;
      })) {
        return;
      }

      this.setFilter(name, filter[name].concat(value));
    }
    /**
     * removes a filter value or, if value is
     * null removes the filter completely
     */

  }, {
    key: "removeFilter",
    value: function removeFilter(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filter = this.state.filter;

      if (value !== null) {
        if (filter[name] === undefined) {
          return;
        }

        filter[name] = filter[name].filter(function (f) {
          return f !== value;
        });
      } else {
        delete filter[name];
      }

      this.apply({
        filter: _objectSpread({}, filter)
      });
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      this.apply({
        filter: {}
      });
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filter = this.state.filter;

      if (name === null) {
        return Object.keys(filter).length > 0 && filter.constructor === Object;
      }

      return filter[name] !== undefined && (value === null || filter[name].includes(value));
    }
  }, {
    key: "countFilter",
    value: function countFilter() {
      var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var filter = this.state.filter;

      if (names.length > 0) {
        var count = 0;

        for (var _i = 0, _Object$keys = Object.keys(filter); _i < _Object$keys.length; _i++) {
          var name = _Object$keys[_i];
          count++;
        }

        return count;
      } else {
        return Object.keys(filter).length;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return this.state.error + ' ' + this.state.errorInfo;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterableProvider, {
        value: {
          filter: this.state.filter,
          addFilter: this.addFilter,
          removeFilter: this.removeFilter,
          setFilter: this.setFilter,
          clearFilter: this.clearFilter,
          hasFilter: this.hasFilter,
          countFilter: this.countFilter
        }
      }, this.props.children);
    }
  }]);

  return Filterable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Filterable.propTypes = {
  setQueryParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Filterable.defaultProps = {};


/***/ }),

/***/ "./resources/js-old/components/datasource/filter/Filters.js":
/*!******************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/Filters.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _Filterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filterable */ "./resources/js-old/components/datasource/filter/Filterable.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toolbar */ "./resources/js-old/components/datasource/toolbar/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Filters = function Filters(_ref) {
  var children = _ref.children,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Effacer les filtres" : _ref$label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filterable__WEBPACK_IMPORTED_MODULE_4__["FilterableConsumer"], null, function (_ref2) {
    var filter = _ref2.filter,
        clearFilter = _ref2.clearFilter,
        hasFilter = _ref2.hasFilter;
    return filter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      flex: false,
      pad: "small",
      gap: "small"
    }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      align: "start",
      border: {
        side: "top",
        color: "dark-6"
      },
      pad: {
        top: "small"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      plain: true,
      hoverIndicator: true,
      disabled: !hasFilter(),
      label: label,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["ClearOption"], null),
      onClick: clearFilter
    })));
  });
};

Filters.Tab = function (_ref3) {
  var _ref3$label = _ref3.label,
      label = _ref3$label === void 0 ? "Filters" : _ref3$label,
      props = _objectWithoutProperties(_ref3, ["label"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filterable__WEBPACK_IMPORTED_MODULE_4__["FilterableConsumer"], null, function (_ref4) {
    var hasFilter = _ref4.hasFilter,
        countFilter = _ref4.countFilter;
    return hasFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarTab"], _extends({
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Filter"], null),
      label: label,
      count: countFilter()
    }, props));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./resources/js-old/components/datasource/filter/SelectFilter.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/SelectFilter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _Filterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filterable */ "./resources/js-old/components/datasource/filter/Filterable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SelectOption = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectOption, _React$Component);

  var _super = _createSuper(SelectOption);

  function SelectOption(props) {
    var _this;

    _classCallCheck(this, SelectOption);

    _this = _super.call(this, props);
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(SelectOption, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hover = this.state.hover;
      var _this$props = this.props,
          label = _this$props.label,
          icon = _this$props.icon,
          active = _this$props.active,
          onClick = _this$props.onClick;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        background: active ? "brand" : hover ? "light-3" : null,
        round: "small",
        pad: "xsmall",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hover: false
          });
        },
        onClick: onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        icon: icon,
        label: label,
        plain: true
      }));
    }
  }]);

  return SelectOption;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var SelectFilter = function SelectFilter(_ref) {
  var name = _ref.name,
      label = _ref.label,
      multi = _ref.multi,
      options = _ref.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filterable__WEBPACK_IMPORTED_MODULE_2__["FilterableConsumer"], null, function (_ref2) {
    var hasFilter = _ref2.hasFilter,
        addFilter = _ref2.addFilter,
        removeFilter = _ref2.removeFilter;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: "small",
      margin: {
        bottom: 'xsmall'
      }
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      direction: "row",
      gap: "small"
    }, options.map(function (_ref3) {
      var value = _ref3.value,
          label = _ref3.label,
          icon = _ref3.icon;
      var active = hasFilter(name, value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectOption, {
        key: label,
        label: label,
        icon: icon,
        active: active,
        onClick: active ? function () {
          return removeFilter(name, multi ? value : null);
        } : function () {
          return addFilter(name, value, multi);
        }
      });
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SelectFilter);

/***/ }),

/***/ "./resources/js-old/components/datasource/filter/StatusFilter.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/StatusFilter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _SelectFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectFilter */ "./resources/js-old/components/datasource/filter/SelectFilter.js");



var defaultOptions = [{
  label: 'Good',
  value: 0,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusGood"], {
    color: "status-ok"
  })
}, {
  label: 'Warning',
  value: 1,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusWarning"], {
    color: "status-warning"
  })
}, {
  label: 'Critical',
  value: 2,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusCritical"], {
    color: "status-critical"
  })
}, {
  label: 'Disabled',
  value: 3,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusDisabled"], {
    color: "status-disabled"
  })
}, {
  label: 'Unknown',
  value: 4,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["StatusUnknown"], {
    color: "status-unknown"
  })
}];

var StatusFilter = function StatusFilter(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Status filter" : _ref$label,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "status" : _ref$name,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? defaultOptions : _ref$options,
      _ref$multi = _ref.multi,
      multi = _ref$multi === void 0 ? true : _ref$multi;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    name: name,
    options: options,
    multi: multi
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StatusFilter);

/***/ }),

/***/ "./resources/js-old/components/datasource/filter/index.js":
/*!****************************************************************!*\
  !*** ./resources/js-old/components/datasource/filter/index.js ***!
  \****************************************************************/
/*! exports provided: Filterable, FilterableContext, FilterableConsumer, Filters, FilterSelect, SelectFilter, EnabledFilter, StatusFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Filterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filterable */ "./resources/js-old/components/datasource/filter/Filterable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filterable", function() { return _Filterable__WEBPACK_IMPORTED_MODULE_0__["Filterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterableContext", function() { return _Filterable__WEBPACK_IMPORTED_MODULE_0__["FilterableContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterableConsumer", function() { return _Filterable__WEBPACK_IMPORTED_MODULE_0__["FilterableConsumer"]; });

/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters */ "./resources/js-old/components/datasource/filter/Filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return _Filters__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FilterSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterSelect */ "./resources/js-old/components/datasource/filter/FilterSelect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterSelect", function() { return _FilterSelect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SelectFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectFilter */ "./resources/js-old/components/datasource/filter/SelectFilter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectFilter", function() { return _SelectFilter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _EnaledFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnaledFilter */ "./resources/js-old/components/datasource/filter/EnaledFilter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnabledFilter", function() { return _EnaledFilter__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StatusFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatusFilter */ "./resources/js-old/components/datasource/filter/StatusFilter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusFilter", function() { return _StatusFilter__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./resources/js-old/components/datasource/index.js":
/*!*********************************************************!*\
  !*** ./resources/js-old/components/datasource/index.js ***!
  \*********************************************************/
/*! exports provided: DataSource, DataSourceConsumer, DataSourceContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataSource */ "./resources/js-old/components/datasource/DataSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _DataSource__WEBPACK_IMPORTED_MODULE_0__["DataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceConsumer", function() { return _DataSource__WEBPACK_IMPORTED_MODULE_0__["DataSourceConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceContext", function() { return _DataSource__WEBPACK_IMPORTED_MODULE_0__["DataSourceContext"]; });




/***/ }),

/***/ "./resources/js-old/components/datasource/list/List.js":
/*!*************************************************************!*\
  !*** ./resources/js-old/components/datasource/list/List.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./resources/js-old/components/datasource/list/index.js");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datasource */ "./resources/js-old/components/datasource/index.js");





var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "grow",
    justify: "center",
    align: "center"
  }, "...");
};

var List = function List(_ref) {
  var children = _ref.children,
      onRowClick = _ref.onRowClick,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show;
  //
  // let ListComponent = null;
  // if (component) {
  //     ListComponent = component;
  // } else if (children) {
  //     ListComponent = React.cloneElement(children, null);
  // } else {
  //     return null;
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_datasource__WEBPACK_IMPORTED_MODULE_3__["DataSourceConsumer"], null, function (_ref2) {
    var identifier = _ref2.identifier,
        items = _ref2.items,
        getItem = _ref2.getItem,
        currentId = _ref2.currentId,
        getItems = _ref2.getItems,
        limit = _ref2.limit,
        itemsLoading = _ref2.itemsLoading,
        selectable = _ref2.selectable,
        orderable = _ref2.orderable;

    if (itemsLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null);
    }

    if (items.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        pad: "small",
        align: "center"
      }, "No items found");
    }

    if (currentId) {
      if (!isNaN(currentId)) {
        // check if it is a number
        currentId = parseInt(currentId);
      }
    }

    var currentIdx = null;

    if (show && currentId) {
      currentIdx = items.findIndex(function (item) {
        return item[identifier] === currentId;
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      overflow: "auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["InfiniteScroll"], {
      items: items,
      onMore: getItems,
      step: limit,
      show: currentIdx // renderMarker={marker => loading && <Box pad="medium" background="accent-1">{marker}</Box>}

    }, function (item, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["ListRow"], {
        key: 'items-' + j,
        item: item,
        getItem: onRowClick === undefined ? getItem : onRowClick,
        selectable: selectable,
        orderable: orderable,
        isActive: item[identifier] === currentId
      }, children);
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./resources/js-old/components/datasource/list/ListRow.js":
/*!****************************************************************!*\
  !*** ./resources/js-old/components/datasource/list/ListRow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order */ "./resources/js-old/components/datasource/order/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ListRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ListRow, _React$Component);

  var _super = _createSuper(ListRow);

  function ListRow(props) {
    var _this;

    _classCallCheck(this, ListRow);

    _this = _super.call(this, props);
    _this.state = {
      isMouseOver: false
    };
    return _this;
  }

  _createClass(ListRow, [{
    key: "handleClick",
    value: function handleClick(item) {
      var getItem = this.props.getItem;

      if (getItem) {
        getItem(item);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _this$props = this.props,
          item = _this$props.item,
          isActive = _this$props.isActive,
          orderable = _this$props.orderable;
      var isMouseOver = this.state.isMouseOver;
      var background = isActive ? 'light-4' : isMouseOver ? 'light-2' : '';
      children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
        item: item,
        isActive: isActive,
        isMouseOver: isMouseOver
      }, null);

      if (orderable) {
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_order__WEBPACK_IMPORTED_MODULE_3__["OrderableItem"], {
          isMouseOver: isMouseOver,
          item: item
        }, children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            isMouseOver: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            isMouseOver: false
          });
        },
        onClick: function onClick() {
          return _this2.handleClick(item);
        },
        background: background,
        border: {
          side: 'bottom',
          color: 'light-4'
        },
        flex: false
      }, children);
    }
  }]);

  return ListRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ListRow);

/***/ }),

/***/ "./resources/js-old/components/datasource/list/index.js":
/*!**************************************************************!*\
  !*** ./resources/js-old/components/datasource/list/index.js ***!
  \**************************************************************/
/*! exports provided: List, ListRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./resources/js-old/components/datasource/list/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ListRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListRow */ "./resources/js-old/components/datasource/list/ListRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListRow", function() { return _ListRow__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/order/Orderable.js":
/*!*******************************************************************!*\
  !*** ./resources/js-old/components/datasource/order/Orderable.js ***!
  \*******************************************************************/
/*! exports provided: Orderable, OrderableContext, OrderableConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderable", function() { return Orderable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableContext", function() { return OrderableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableConsumer", function() { return OrderableConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OrderableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var OrderableProvider = OrderableContext.Provider;
var OrderableConsumer = OrderableContext.Consumer;

var Orderable = /*#__PURE__*/function (_Component) {
  _inherits(Orderable, _Component);

  var _super = _createSuper(Orderable);

  function Orderable(props) {
    var _this;

    _classCallCheck(this, Orderable);

    _this = _super.call(this, props);
    _this.state = {
      // the item dragged
      dragged: false,
      draggedIndex: false,
      updatedIndex: false,
      previousOrder: [],
      origin: {},
      gapStyle: {},
      draggedStyle: {}
    };
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_this));
    _this.isDragged = _this.isDragged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Orderable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this2 = this;

      if (prevState.dragged !== this.state.dragged) {
        if (this.state.dragged !== false) {
          window.addEventListener('mousemove', this.handleMouseMove);
          window.addEventListener('mouseup', this.handleMouseUp);
        } else {
          window.removeEventListener('mousemove', this.handleMouseMove);
          window.removeEventListener('mouseup', this.handleMouseUp);
        }
      }

      if (prevState.updatedIndex !== this.state.updatedIndex && this.state.updatedIndex !== false) {
        /**
         * reorders the items in the list
         */
        var _this$props = this.props,
            items = _this$props.items,
            identifier = _this$props.identifier,
            handleReorder = _this$props.handleReorder; // swap items

        var reorderedItems = items.filter(function (item) {
          return item[identifier] !== _this2.state.dragged[identifier];
        });
        reorderedItems.splice(this.state.updatedIndex, 0, this.state.dragged);

        if (handleReorder) {
          handleReorder(reorderedItems);
        }
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;

      /**
       * mouse moving (dragging) updates item position on screen
       * and the index of the item it is over on the list
       */
      var _this$state = this.state,
          origin = _this$state.origin,
          draggedStyle = _this$state.draggedStyle;
      var updatedIndex = Math.round((clientY - origin.y) / origin.height) + this.state.draggedIndex; // console.log(draggedIndex, updatedIndex)

      if (updatedIndex < 0 || updatedIndex > this.props.items.length - 1) {
        // doesn't drag outside of the list
        return;
      }

      this.setState({
        updatedIndex: updatedIndex,
        draggedStyle: _objectSpread({}, draggedStyle, {
          top: clientY - origin.height / 2,
          left: origin.x
        })
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(_ref2, item) {
      var x = _ref2.x,
          y = _ref2.y,
          height = _ref2.height,
          width = _ref2.width,
          top = _ref2.top,
          bottom = _ref2.bottom,
          left = _ref2.left,
          right = _ref2.right;
      var _this$props2 = this.props,
          items = _this$props2.items,
          identifier = _this$props2.identifier;
      var currentOrder = items.map(function (item) {
        return item[identifier];
      });
      this.setState({
        dragged: item,
        draggedIndex: currentOrder.indexOf(item[identifier]),
        previousOrder: currentOrder,
        origin: {
          x: x,
          y: y,
          height: height,
          width: width
        },
        gapStyle: {
          height: height,
          minHeight: height,
          backgroundColor: 'white',
          border: '2px dashed #CECECE'
        },
        draggedStyle: {
          zIndex: 100,
          cursor: 'grabbing',
          backgroundColor: 'white',
          position: 'absolute',
          width: width,
          height: height,
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
          userSelect: 'none'
        }
      });
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      var previousOrder = this.state.previousOrder;
      var _this$props3 = this.props,
          items = _this$props3.items,
          identifier = _this$props3.identifier,
          handleReorder = _this$props3.handleReorder,
          source = _this$props3.source;
      var currentOrder = items.map(function (item) {
        return item[identifier];
      });

      if (previousOrder.length !== currentOrder.length || !currentOrder.every(function (id, index) {
        return id === previousOrder[index];
      })) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/' + source + '/reorder', {
          order: currentOrder
        })["catch"](function () {
          return handleReorder(previousOrder.map(function (id) {
            return items.find(function (item) {
              return item[identifier] === id;
            });
          }));
        });
      } // compare previous id list


      this.setState({
        dragged: false,
        draggedIndex: false,
        updatedIndex: false,
        origin: {}
      });
    }
  }, {
    key: "isDragged",
    value: function isDragged(item) {
      return item[this.props.identifier] === this.state.dragged[this.props.identifier];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderableProvider, {
        value: {
          draggedStyle: this.state.draggedStyle,
          gapStyle: this.state.gapStyle,
          isDragged: this.isDragged,
          handleMouseDown: this.handleMouseDown
        }
      }, this.props.children);
    }
  }]);

  return Orderable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js-old/components/datasource/order/OrderableItem.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/order/OrderableItem.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _Orderable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Orderable */ "./resources/js-old/components/datasource/order/Orderable.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var OrderableItemIcon = /*#__PURE__*/function (_Component) {
  _inherits(OrderableItemIcon, _Component);

  var _super = _createSuper(OrderableItemIcon);

  function OrderableItemIcon(props) {
    var _this;

    _classCallCheck(this, OrderableItemIcon);

    _this = _super.call(this, props);
    _this.state = {
      grabbing: false
    };
    return _this;
  }

  _createClass(OrderableItemIcon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _onMouseDown = this.props.onMouseDown;
      var grabbing = this.state.grabbing;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        justify: "center",
        align: "center",
        pad: {
          right: "xsmall"
        },
        style: {
          cursor: grabbing ? 'grabbing' : 'grab'
        },
        onMouseDown: function onMouseDown() {
          return _this2.setState({
            grabbing: true
          }, _onMouseDown);
        },
        onMouseUp: function onMouseUp() {
          return _this2.setState({
            grabbing: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Drag"], null));
    }
  }]);

  return OrderableItemIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var OrderableItem = /*#__PURE__*/function (_Component2) {
  _inherits(OrderableItem, _Component2);

  var _super2 = _createSuper(OrderableItem);

  function OrderableItem(props) {
    var _this3;

    _classCallCheck(this, OrderableItem);

    _this3 = _super2.call(this, props);
    _this3.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this3;
  }

  _createClass(OrderableItem, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          children = _this$props.children,
          item = _this$props.item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Orderable__WEBPACK_IMPORTED_MODULE_4__["OrderableConsumer"], null, function (_ref) {
        var handleMouseDown = _ref.handleMouseDown,
            isDragged = _ref.isDragged,
            draggedStyle = _ref.draggedStyle,
            gapStyle = _ref.gapStyle;
        var moving = isDragged(item);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, moving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          style: gapStyle
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          ref: _this4.ref,
          direction: "row",
          style: moving ? draggedStyle : {
            userSelect: 'none'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderableItemIcon, {
          onMouseDown: function onMouseDown() {
            return handleMouseDown(_this4.ref.current.getBoundingClientRect(), item);
          }
        }), children));
      });
    }
  }]);

  return OrderableItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

OrderableItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
OrderableItem.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (OrderableItem);

/***/ }),

/***/ "./resources/js-old/components/datasource/order/index.js":
/*!***************************************************************!*\
  !*** ./resources/js-old/components/datasource/order/index.js ***!
  \***************************************************************/
/*! exports provided: Orderable, OrderableContext, OrderableConsumer, OrderableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orderable */ "./resources/js-old/components/datasource/order/Orderable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orderable", function() { return _Orderable__WEBPACK_IMPORTED_MODULE_0__["Orderable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderableContext", function() { return _Orderable__WEBPACK_IMPORTED_MODULE_0__["OrderableContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderableConsumer", function() { return _Orderable__WEBPACK_IMPORTED_MODULE_0__["OrderableConsumer"]; });

/* harmony import */ var _OrderableItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderableItem */ "./resources/js-old/components/datasource/order/OrderableItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderableItem", function() { return _OrderableItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/search/Search.js":
/*!*****************************************************************!*\
  !*** ./resources/js-old/components/datasource/search/Search.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _Searchable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Searchable */ "./resources/js-old/components/datasource/search/Searchable.js");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-localization */ "./node_modules/react-localization/lib/LocalizedStrings.js");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_localization__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var strings = new react_localization__WEBPACK_IMPORTED_MODULE_4___default.a({
  en: {
    search: "Search"
  },
  fr: {
    search: "Rechercher"
  }
});

var Search = function Search(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["value", "onChange"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Searchable__WEBPACK_IMPORTED_MODULE_3__["SearchableConsumer"], null, function (_ref2) {
    var search = _ref2.search,
        setSearch = _ref2.setSearch,
        clearSearch = _ref2.clearSearch;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "search",
      direction: "row",
      round: "xsmall",
      border: true,
      flex: false
    }, search.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Close"], null),
      onClick: clearSearch
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Search"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["TextInput"], _extends({
      plain: true,
      type: "text",
      value: search,
      onChange: function onChange(event) {
        return setSearch(event.target.value);
      },
      placeholder: strings.search
    }, props)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./resources/js-old/components/datasource/search/Searchable.js":
/*!*********************************************************************!*\
  !*** ./resources/js-old/components/datasource/search/Searchable.js ***!
  \*********************************************************************/
/*! exports provided: Searchable, SearchableContext, SearchableConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchable", function() { return Searchable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableContext", function() { return SearchableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableConsumer", function() { return SearchableConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./resources/js-old/components/datasource/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SearchableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  search: ''
});
var SearchableProvider = SearchableContext.Provider;
var SearchableConsumer = SearchableContext.Consumer;

var Searchable = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Searchable, _React$PureComponent);

  var _super = _createSuper(Searchable);

  function Searchable(props) {
    var _this;

    _classCallCheck(this, Searchable);

    _this = _super.call(this, props);
    _this.state = {
      search: props.search !== undefined ? props.search : ''
    };
    _this.hash = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hash"])(props.source);
    _this.searchDelay = null;
    _this.setSearch = _this.setSearch.bind(_assertThisInitialized(_this));
    _this.clearSearch = _this.clearSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Searchable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setSearch(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getSession"])(this.hash, 'search'));
    }
  }, {
    key: "setSearch",
    value: function setSearch(string) {
      var _this2 = this;

      if (string == null) return;
      this.setState({
        search: string
      });

      if (string.length > 1 && string.length !== 0) {
        clearTimeout(this.searchDelay);
        this.searchDelay = setTimeout(function () {
          _this2.props.setQueryParams({
            search: string
          });

          Object(_util__WEBPACK_IMPORTED_MODULE_2__["setSession"])(_this2.hash, 'search', string);
        }, 400);
      }
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      var _this3 = this;

      this.setState({
        search: ''
      }, function () {
        _this3.props.setQueryParams({
          search: ''
        });

        Object(_util__WEBPACK_IMPORTED_MODULE_2__["clearSession"])(_this3.hash, 'search');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchableProvider, {
        value: {
          search: this.state.search,
          setSearch: this.setSearch,
          clearSearch: this.clearSearch
        }
      }, this.props.children);
    }
  }]);

  return Searchable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Searchable.propTypes = {
  setQueryParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Searchable.defaultProps = {};


/***/ }),

/***/ "./resources/js-old/components/datasource/search/index.js":
/*!****************************************************************!*\
  !*** ./resources/js-old/components/datasource/search/index.js ***!
  \****************************************************************/
/*! exports provided: Searchable, SearchableContext, SearchableConsumer, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Searchable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Searchable */ "./resources/js-old/components/datasource/search/Searchable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Searchable", function() { return _Searchable__WEBPACK_IMPORTED_MODULE_0__["Searchable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchableContext", function() { return _Searchable__WEBPACK_IMPORTED_MODULE_0__["SearchableContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchableConsumer", function() { return _Searchable__WEBPACK_IMPORTED_MODULE_0__["SearchableConsumer"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./resources/js-old/components/datasource/search/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/sort/SortBy.js":
/*!***************************************************************!*\
  !*** ./resources/js-old/components/datasource/sort/SortBy.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toolbar */ "./resources/js-old/components/datasource/toolbar/index.js");
/* harmony import */ var _Sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sortable */ "./resources/js-old/components/datasource/sort/Sortable.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var SortBy = function SortBy(_ref) {
  var options = _ref.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sortable__WEBPACK_IMPORTED_MODULE_5__["SortableConsumer"], null, function (_ref2) {
    var toggleSortBy = _ref2.toggleSortBy,
        isSortBy = _ref2.isSortBy,
        isSortByAsc = _ref2.isSortByAsc,
        resetSortBy = _ref2.resetSortBy;
    return toggleSortBy !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      flex: false,
      direction: "row",
      gap: "small",
      pad: "small",
      wrap: true
    }, options.map(function (_ref3) {
      var name = _ref3.name,
          label = _ref3.label;
      var color = isSortBy(name) ? "brand" : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_4__["ToolbarButton"], {
        key: name,
        label: label,
        icon: isSortBy(name) ? isSortByAsc(name) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Ascend"], {
          color: color
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Descend"], {
          color: color
        }) : null,
        onClick: function onClick() {
          return toggleSortBy(name);
        }
      });
    }));
  });
};

SortBy.Tab = function (_ref4) {
  var options = _ref4.options,
      label = _ref4.label,
      props = _objectWithoutProperties(_ref4, ["options", "label"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sortable__WEBPACK_IMPORTED_MODULE_5__["SortableConsumer"], null, function (_ref5) {
    var sort_by = _ref5.sort_by;
    if (sort_by === undefined) return null;

    var _ref6 = sort_by.length > 0 ? options.find(function (_ref7) {
      var name = _ref7.name;
      return name === sort_by[0].name;
    }) : {
      label: label
    },
        label = _ref6.label;

    var direction = sort_by.length > 0 ? sort_by[0].direction : 'asc';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_4__["ToolbarTab"], _extends({
      icon: direction === 'asc' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Ascend"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Descend"], null),
      label: label
    }, props));
  });
}; //
//
// SortableToolbar.propTypes = {
//     options: PropTypes.arrayOf(
//         PropTypes.exact({
//             label: PropTypes.string,
//             name: PropTypes.string,
//         }),
//     ),
// };
//
// SortableToolbar.defaultProps = {
//
// };


/* harmony default export */ __webpack_exports__["default"] = (SortBy);

/***/ }),

/***/ "./resources/js-old/components/datasource/sort/Sortable.js":
/*!*****************************************************************!*\
  !*** ./resources/js-old/components/datasource/sort/Sortable.js ***!
  \*****************************************************************/
/*! exports provided: Sortable, SortableContext, SortableConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContext", function() { return SortableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableConsumer", function() { return SortableConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./resources/js-old/components/datasource/util/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SortableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  sort_by: []
});
var SortableProvider = SortableContext.Provider;
var SortableConsumer = SortableContext.Consumer;

var Sortable = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Sortable, _React$PureComponent);

  var _super = _createSuper(Sortable);

  function Sortable(props) {
    var _this;

    _classCallCheck(this, Sortable);

    _this = _super.call(this, props);
    _this.state = {
      sort_by: props.sort_by !== undefined ? props.sort_by : []
    };
    _this.hash = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hash"])(props.source);
    _this.apply = _this.apply.bind(_assertThisInitialized(_this));
    _this.setSortBy = _this.setSortBy.bind(_assertThisInitialized(_this));
    _this.delSortBy = _this.delSortBy.bind(_assertThisInitialized(_this));
    _this.toggleSortBy = _this.toggleSortBy.bind(_assertThisInitialized(_this));
    _this.clearSortBy = _this.clearSortBy.bind(_assertThisInitialized(_this));
    _this.resetSortBy = _this.resetSortBy.bind(_assertThisInitialized(_this));
    _this.isSortBy = _this.isSortBy.bind(_assertThisInitialized(_this));
    _this.isSortByAsc = _this.isSortByAsc.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sortable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sort_by = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getSession"])(this.hash, 'sort_by');

      if (sort_by) {
        this.apply({
          sort_by: sort_by
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {// console.log('## SortableContext update: ', prevState.sort_by, '=>', this.state.sort_by)
    }
  }, {
    key: "apply",
    value: function apply(state) {
      var _this2 = this;

      this.setState(state, function () {
        _this2.props.setQueryParams(state);

        Object(_util__WEBPACK_IMPORTED_MODULE_2__["setSession"])(_this2.hash, 'sort_by', state.sort_by);
      });
    }
  }, {
    key: "getSortBy",
    value: function getSortBy(name) {
      return this.state.sort_by.find(function (s) {
        return s.name === name;
      });
    }
  }, {
    key: "setSortBy",
    value: function setSortBy(name) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
      this.apply({
        sort_by: [{
          name: name,
          direction: direction
        }]
      });
    }
  }, {
    key: "delSortBy",
    value: function delSortBy(name) {
      this.apply({
        sort_by: this.state.sort_by.filter(function (s) {
          return s.name !== name;
        })
      });
    }
  }, {
    key: "toggleSortBy",
    value: function toggleSortBy(name) {
      var sort_by = this.getSortBy(name);
      sort_by === undefined ? this.setSortBy(name) : this.setSortBy(name, sort_by.direction === 'asc' ? 'desc' : 'asc');
    }
  }, {
    key: "resetSortBy",
    value: function resetSortBy() {
      // sets the defaults
      var sort_by = this.props.sort_by;
      this.apply({
        sort_by: sort_by !== undefined ? sort_by : []
      });
    }
  }, {
    key: "clearSortBy",
    value: function clearSortBy() {
      this.apply({
        sort_by: []
      });
    }
  }, {
    key: "isSortBy",
    value: function isSortBy(name) {
      return this.state.sort_by.some(function (s) {
        return s.name === name;
      });
    }
  }, {
    key: "isSortByAsc",
    value: function isSortByAsc(name) {
      var sort_by = this.getSortBy(name);
      return sort_by !== undefined ? sort_by.direction === 'asc' : undefined;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortableProvider, {
        value: {
          sort_by: this.state.sort_by,
          setSortBy: this.setSortBy,
          delSortBy: this.delSortBy,
          toggleSortBy: this.toggleSortBy,
          clearSortBy: this.clearSortBy,
          resetSortBy: this.resetSortBy,
          isSortByAsc: this.isSortByAsc,
          isSortBy: this.isSortBy
        }
      }, this.props.children);
    }
  }]);

  return Sortable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Sortable.propTypes = {
  setQueryParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  sort_by: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['asc', 'desc'])
  }))
};
Sortable.defaultProps = {};


/***/ }),

/***/ "./resources/js-old/components/datasource/sort/index.js":
/*!**************************************************************!*\
  !*** ./resources/js-old/components/datasource/sort/index.js ***!
  \**************************************************************/
/*! exports provided: Sortable, SortableConsumer, SortBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sortable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sortable */ "./resources/js-old/components/datasource/sort/Sortable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return _Sortable__WEBPACK_IMPORTED_MODULE_0__["Sortable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableConsumer", function() { return _Sortable__WEBPACK_IMPORTED_MODULE_0__["SortableConsumer"]; });

/* harmony import */ var _SortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortBy */ "./resources/js-old/components/datasource/sort/SortBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortBy", function() { return _SortBy__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/toolbar/Info.js":
/*!****************************************************************!*\
  !*** ./resources/js-old/components/datasource/toolbar/Info.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSource */ "./resources/js-old/components/datasource/DataSource.js");




var Info = function Info(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "items" : _ref$label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pad: "small",
    flex: "grow",
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataSource__WEBPACK_IMPORTED_MODULE_2__["DataSourceConsumer"], null, function (_ref2) {
    var total = _ref2.total,
        count = _ref2.count,
        loading = _ref2.loading;
    if (loading) return '...';
    return (total > count ? count + ' of ' + total : total) + ' ' + label;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./resources/js-old/components/datasource/toolbar/Toolbar.js":
/*!*******************************************************************!*\
  !*** ./resources/js-old/components/datasource/toolbar/Toolbar.js ***!
  \*******************************************************************/
/*! exports provided: Toolbar, ToolbarTab, ToolbarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTab", function() { return ToolbarTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return ToolbarButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ToolbarIcon = function ToolbarIcon(_ref) {
  var icon = _ref.icon,
      count = _ref.count;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, icon, count > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "brand",
    pad: {
      horizontal: 'xsmall'
    },
    style: {
      position: 'absolute',
      top: -8,
      right: -6
    },
    round: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "xsmall"
  }, count)));
};

var ToolbarTab = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarTab, _React$Component);

  var _super = _createSuper(ToolbarTab);

  function ToolbarTab(props) {
    var _this;

    _classCallCheck(this, ToolbarTab);

    _this = _super.call(this, props);
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(ToolbarTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$label = _this$props.label,
          label = _this$props$label === void 0 ? 'Tab' : _this$props$label,
          _this$props$icon = _this$props.icon,
          icon = _this$props$icon === void 0 ? null : _this$props$icon,
          _this$props$count = _this$props.count,
          count = _this$props$count === void 0 ? 0 : _this$props$count,
          current = _this$props.current,
          name = _this$props.name,
          onClick = _this$props.onClick;
      var hover = this.state.hover;
      var round = hover && current === null ? 'xsmall' : {
        size: "xsmall",
        corner: "top"
      };
      var background = current === name ? "light-4" : hover ? "light-2" : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        pad: "small",
        round: round,
        background: background,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hover: false
          });
        },
        onClick: onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        label: label,
        plain: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolbarIcon, {
          icon: icon,
          count: count
        })
      }));
    }
  }]);

  return ToolbarTab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var ToolbarButton = /*#__PURE__*/function (_React$Component2) {
  _inherits(ToolbarButton, _React$Component2);

  var _super2 = _createSuper(ToolbarButton);

  function ToolbarButton(props) {
    var _this3;

    _classCallCheck(this, ToolbarButton);

    _this3 = _super2.call(this, props);
    _this3.state = {
      hover: false
    };
    return _this3;
  }

  _createClass(ToolbarButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var hover = this.state.hover;
      var _this$props2 = this.props,
          label = _this$props2.label,
          icon = _this$props2.icon,
          active = _this$props2.active,
          onClick = _this$props2.onClick;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        background: active ? "brand" : hover ? "light-3" : null,
        round: "small",
        pad: "xsmall",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hover: false
          });
        },
        onClick: onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        icon: icon,
        label: label,
        plain: true
      }));
    }
  }]);

  return ToolbarButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Toolbar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Toolbar, _React$PureComponent);

  var _super3 = _createSuper(Toolbar);

  function Toolbar(props) {
    var _this5;

    _classCallCheck(this, Toolbar);

    _this5 = _super3.call(this, props);
    _this5.state = {
      showTool: null,
      error: ''
    };
    _this5.handleToolbarTab = _this5.handleToolbarTab.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(Toolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "handleToolbarTab",
    value: function handleToolbarTab(name) {
      this.setState({
        showTool: this.state.showTool === name ? null : name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var children = this.props.children;
      var _this$state = this.state,
          showTool = _this$state.showTool,
          error = _this$state.error;

      if (error) {
        return error;
      }

      var currentTool = null;
      var toolbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        var _child$type = child.type,
            Tab = _child$type.Tab,
            Button = _child$type.Button,
            name = _child$type.name;

        if (showTool === name) {
          currentTool = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            background: "light-4"
          }, child);
        }

        if (Tab !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, _extends({
            name: name,
            current: showTool,
            onClick: function onClick() {
              return _this6.handleToolbarTab(name);
            }
          }, child.props));
        }

        if (Button !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null);
        }

        return child;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        flex: false,
        margin: {
          vertical: 'xsmall'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        direction: "row"
      }, toolbar), currentTool);
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ }),

/***/ "./resources/js-old/components/datasource/toolbar/index.js":
/*!*****************************************************************!*\
  !*** ./resources/js-old/components/datasource/toolbar/index.js ***!
  \*****************************************************************/
/*! exports provided: Toolbar, ToolbarTab, ToolbarButton, Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "./resources/js-old/components/datasource/toolbar/Toolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarTab", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["ToolbarTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["ToolbarButton"]; });

/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info */ "./resources/js-old/components/datasource/toolbar/Info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _Info__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/util/DownloadButton.js":
/*!***********************************************************************!*\
  !*** ./resources/js-old/components/datasource/util/DownloadButton.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-localization */ "./node_modules/react-localization/lib/LocalizedStrings.js");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_localization__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataSource */ "./resources/js-old/components/datasource/DataSource.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var strings = new react_localization__WEBPACK_IMPORTED_MODULE_3___default.a({
  en: {
    exportdoc: "Export {0} {1}"
  },
  fr: {
    exportdoc: "Exporter {0} {1}"
  }
});

var DownloadButton = function DownloadButton(_ref) {
  var type = _ref.type,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["type", "label"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataSource__WEBPACK_IMPORTED_MODULE_4__["DataSourceConsumer"], null, function (_ref2) {
    var downloadItems = _ref2.downloadItems,
        itemsDownloading = _ref2.itemsDownloading,
        count = _ref2.count;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
      disabled: itemsDownloading,
      icon: itemsDownloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["Download"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["DocumentExcel"], null),
      label: strings.formatString(strings.exportdoc, count, label),
      onClick: function onClick() {
        return downloadItems(type);
      }
    }, props));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadButton);

/***/ }),

/***/ "./resources/js-old/components/datasource/util/index.js":
/*!**************************************************************!*\
  !*** ./resources/js-old/components/datasource/util/index.js ***!
  \**************************************************************/
/*! exports provided: DownloadButton, hash, getSession, setSession, clearSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadButton */ "./resources/js-old/components/datasource/util/DownloadButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadButton", function() { return _DownloadButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./resources/js-old/components/datasource/util/session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["hash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["getSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["setSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearSession", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["clearSession"]; });





/***/ }),

/***/ "./resources/js-old/components/datasource/util/session.js":
/*!****************************************************************!*\
  !*** ./resources/js-old/components/datasource/util/session.js ***!
  \****************************************************************/
/*! exports provided: hash, getSession, setSession, clearSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return setSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSession", function() { return clearSession; });
function hash(key) {
  var hash = 0,
      i,
      chr;

  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
}

function getSession(hash, key) {
  try {
    return JSON.parse(localStorage.getItem(key + '.' + hash));
  } catch (SyntaxError) {
    return null;
  }
}

function setSession(hash, key, value) {
  localStorage.setItem(key + '.' + hash, JSON.stringify(value));
}

function clearSession(hash) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  key ? localStorage.removeItem(key + '.' + hash) : localStorage.clear();
}



/***/ })

}]);