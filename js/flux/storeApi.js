"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getStoreApi = exports.fUseStoreState = exports.createStoreWithSelector = void 0;
var _bindTo = require("../utils/bindTo");
var _zustandLite = require("./zustand-lite");
var _useSubscribeState = _interopRequireDefault(require("../components/hooks/useSubscribeState"));
const createStoreWithSelector = crStore => (0, _zustandLite.createStore)((0, _zustandLite.subscribeWithSelector)(crStore));
exports.createStoreWithSelector = createStoreWithSelector;
const fUseStoreState = (store, select) => (0, _bindTo.bindTo)(_useSubscribeState.default, store, select);
exports.fUseStoreState = fUseStoreState;
const getStoreApi = store => [store.setState, store.getState];
exports.getStoreApi = getStoreApi;
//# sourceMappingURL=storeApi.js.map