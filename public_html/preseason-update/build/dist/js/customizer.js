webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.assetPath = assetPath;
exports.pushToDataLayer = pushToDataLayer;

/* global versionedAssetPath:true */
function assetPath(path) {
    return '' + versionedAssetPath + path;
}

var analyticsEvent = {
    event: 'analyticsEvent',
    eventCategory: 'Preseason-Update'
};

function pushToDataLayer(event) {
    if (typeof window.dataLayer.push === 'function') {
        var pushedEvent = _extends({}, analyticsEvent, event);

        if (process.env.NODE_ENV !== 'production') {
            console.log(pushedEvent);
        }
        window.dataLayer.push(pushedEvent);
    }
}

exports.default = {
    assetPath: assetPath,
    pushToDataLayer: pushToDataLayer
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = __webpack_require__(11);

exports.default = [{
    slug: 'resolve',
    id: 8400,
    landing: {
        glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/glow-r.png'),
        icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/icon-r.png'),
        vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Resolve/vfx-r.png')
    },
    construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8400'),
    icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/resolve/icon-r-36x36.png'),
    colors: {
        title: '#a1d586',
        gradient: {
            top: '#a1d586',
            bottom: '#a4d08d'
        }
    },
    videos: {
        8437: '7HfWqtiLgug', // Grasp Of The Undying
        8436: 'fXHbN6e0biQ', // Guardian
        8439: 'k04J5F7BSG0' // Aftershock
    }
}, {
    slug: 'domination',
    id: 8100,
    construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8100'),
    landing: {
        glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/glow-d.png'),
        icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/icon-d.png'),
        vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Domination/vfx-d.png')
    },
    icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/domination/icon-d-36x36.png'),
    colors: {
        title: '#d44242',
        gradient: {
            top: '#d44242',
            bottom: '#dc4747'
        }
    },
    videos: {
        8112: 'eAYgLNxEXL4', // Electrocute
        8124: '8-5htdt-ohg', // Predator
        8128: 'fKKTvyoaMu4' // Dark Harvest
    }
}, {
    slug: 'precision',
    id: 8000,
    construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8000'),
    landing: {
        glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/glow-p.png'),
        icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/icon-p.png'),
        vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Precision/vfx-p.png')
    },
    icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/precision/icon-p-36x36.png'),
    colors: {
        title: '#c8aa6e',
        gradient: {
            top: '#c8aa6e',
            bottom: '#aea789'
        }
    },
    videos: {
        8003: 'PTQLTMSZr-k', // Press The Attack
        8008: 'iA8OK5evk6w', // Lethal Tempo
        8021: 'nbD_xmQIYRM' // Fleet Footwork
    }
}, {
    slug: 'sorcery',
    id: 8200,
    construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8200'),
    landing: {
        glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/glow-s.png'),
        icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/icon-s.png'),
        vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Sorcery/vfx-s.png')
    },
    icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/sorcery/icon-s-36x36.png'),
    colors: {
        title: '#9faafc',
        gradient: {
            top: '#9faafc',
            bottom: '#6c75f5'
        }
    },
    videos: {
        8214: 'spn_dmGAEs0', // Summon Aerie
        8229: 'GpNN2Q4a1qY', // Arcane Comet
        8230: 'uJ5DQhy-axc' // Phase Rush
    }
}, {
    slug: 'inspiration',
    id: 8300,
    construct: (0, _helpers.assetPath)('/img/runeBuilder/assets/construct/8300'),
    landing: {
        glow: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/glow-i.png'),
        icon: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/icon-i.png'),
        vfx: (0, _helpers.assetPath)('/img/runeBuilder/assets/Inspiration/vfx-i.png')
    },
    icon: (0, _helpers.assetPath)('/img/runeBuilder/runes/inspiration/icon-i-36x36.png'),
    colors: {
        title: '#49aab9',
        gradient: {
            top: '#49aab9',
            bottom: '#48b4be'
        }
    },
    videos: {
        8326: 'FkYLrlYVxDg', // Unsealed Spellbook (previously Summoner Specialist)
        8351: 'KSaOUuW-t6Q', // Glacial Augment
        8359: false
    }
}];

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _axios = __webpack_require__(195);

var _axios2 = _interopRequireDefault(_axios);

var _helpers = __webpack_require__(11);

var _paths = __webpack_require__(146);

var _paths2 = _interopRequireDefault(_paths);

var _App = __webpack_require__(613);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable */
    __webpack_require__(236);
    /* eslint-enable */
}

var mountNode = document.querySelector('#customizer-app');

if (mountNode) {
    _axios2.default.get((0, _helpers.assetPath)('/data/' + window.language + '/runes.json')).then(function (response) {
        var data = response.data.styles.map(function (path, pathIndex) {
            return _extends({}, _paths2.default[pathIndex], path);
        });

        data = [data[2], data[1], data[3], data[0], data[4]];

        (0, _reactDom.render)(_react2.default.createElement(_App2.default, { paths: data }), mountNode);
    });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _scrollmonitor = __webpack_require__(59);

var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

var _helpers = __webpack_require__(11);

var _Desktop = __webpack_require__(614);

var _Desktop2 = _interopRequireDefault(_Desktop);

var _Mobile = __webpack_require__(678);

var _Mobile2 = _interopRequireDefault(_Mobile);

var _ViewportSwitch = __webpack_require__(680);

var _ViewportSwitch2 = _interopRequireDefault(_ViewportSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            current: -1,
            viewed: false
        };

        _this.setCurrent = function (current) {
            _this.setState({
                current: current
            }, function () {
                if (current !== -1) {
                    var event = {
                        eventAction: 'CarouselSection-Path',
                        eventLabel: _this.props.paths[current].name
                    };

                    (0, _helpers.pushToDataLayer)(event);
                }
            });
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.elementWatcher = _scrollmonitor2.default.create(this.appNode, -(window.innerHeight * -0.25));

            this.elementWatcher.enterViewport(function () {
                _this2.setState({
                    viewed: true
                });
                _this2.elementWatcher.destroy();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var paths = this.props.paths;


            return _react2.default.createElement(
                'div',
                { ref: function ref(node) {
                        _this3.appNode = node;
                    } },
                _react2.default.createElement(_ViewportSwitch2.default, {
                    queryString: '(min-width: 992px)',
                    PassComponent: _react2.default.createElement(_Desktop2.default, _extends({
                        paths: paths
                    }, this.state, {
                        setCurrent: this.setCurrent
                    })),
                    FailComponent: _react2.default.createElement(_Mobile2.default, _extends({
                        paths: paths
                    }, this.state, {
                        setCurrent: this.setCurrent
                    }))
                })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Listing = __webpack_require__(615);

var _Listing2 = _interopRequireDefault(_Listing);

var _Viewer = __webpack_require__(616);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

var Block = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Desktop__Block'
})(['padding:0 2px;border:solid;border-width:2px 0;border-color:#ab8f57 transparent #6c5021;background:rgba(0,0,0,0.4);box-shadow:0 0 80px #000;position:relative;z-index:0;animation:', ' 0.75s ease forwards;&::before,&::after{content:\'\';display:block;width:2px;height:100%;position:absolute;top:0;bottom:0;background:linear-gradient(0deg,#6c5021 0%,#ab8f57 100%);}&::before{left:0;}&::after{right:0;}'], fadeIn);

var Desktop = function (_React$Component) {
    _inherits(Desktop, _React$Component);

    function Desktop() {
        _classCallCheck(this, Desktop);

        return _possibleConstructorReturn(this, (Desktop.__proto__ || Object.getPrototypeOf(Desktop)).apply(this, arguments));
    }

    _createClass(Desktop, [{
        key: 'render',
        value: function render() {
            switch (this.props.current) {
                case -1:
                    return _react2.default.createElement(
                        Block,
                        null,
                        _react2.default.createElement(_Listing2.default, this.props)
                    );
                default:
                    return _react2.default.createElement(
                        Block,
                        null,
                        _react2.default.createElement(_Viewer2.default, this.props)
                    );
            }
        }
    }]);

    return Desktop;
}(_react2.default.Component);

exports.default = Desktop;

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Listing__Block'
})(['padding:18px;position:relative;z-index:1;']);

var List = (0, _styledComponents2.default)('ul').withConfig({
    displayName: 'Listing__List'
})(['display:flex;list-style:none;padding:0;margin:0 -5px;height:700px;']);

var Path = (0, _styledComponents2.default)('li').withConfig({
    displayName: 'Listing__Path'
})(['flex:0 0 auto;width:', '%;height:100%;padding:0 5px;position:relative;'], 100 / 5);

var Rune = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Listing__Rune'
})(['overflow:hidden;padding:0;width:100%;height:700px;border:0;background:#000;color:#b5b4b2;font-size:18px;line-height:', 'em;text-align:center;position:relative;transition:0.3s;will-change:transform;&::before{content:\'\';display:block;width:100%;height:100%;border:1px solid #31271e;position:absolute;top:0;left:0;z-index:10;}&::after{content:\'\';opacity:0;display:block;width:100%;height:100%;position:absolute;top:0;left:0;background:#070d10;transition:0.3s;', ':hover &{opacity:0.5;}}&:hover{', ':hover &::after{opacity:0;}}'], 28 / 18, Block, Block);

var SplashWrap = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Listing__SplashWrap'
})(['overflow:hidden;height:700px;position:relative;transform:translateY(20%);opacity:0;transition:0.4s ease;', ' ', ' &::after{content:\'\';display:block;margin:0 -180px;width:360px;height:100%;box-shadow:inset 0 0 110px rgba(0,0,0,0.8);position:absolute;top:0;left:50%;}'], function (props) {
    return props.viewed && '\n        transform: none;\n        opacity: 1;\n    ';
}, function (props) {
    return '\n        transition-delay: ' + props.index * 0.05 + 's;\n    ';
});

var Splash = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Listing__Splash'
})(['margin:0;width:360px;height:auto;position:absolute;bottom:0;left:50%;transform:translateX(-50%);']);

var Header = (0, _styledComponents2.default)('header').withConfig({
    displayName: 'Listing__Header'
})(['padding:0 20px 40px;background:#111318;width:100%;position:absolute;left:0;top:100%;transform:translateY(-80px);transition:0.3s;&::before{content:\'\';display:block;width:100%;height:2px;background:linear-gradient(90deg,#433712 0%,#c5b88a 50%,#433712 100%);position:absolute;top:0;left:0;}', ':hover &{transform:translateY(-100%) translateY(20px);transition:0.3s;}'], Rune);

var RuneTitle = (0, _styledComponents2.default)('h4').withConfig({
    displayName: 'Listing__RuneTitle'
})(['margin:20px 0 0;color:#d8cfbd;font-size:', 'em;line-height:40px;text-transform:uppercase;'], 20 / 18);

var RuneBody = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Listing__RuneBody'
})(['opacity:0;transform:translateY(20px);transition:0.3s 0.15s;', ':hover &{opacity:1;transform:none;}'], Rune);

var Listing = function Listing(_ref) {
    var paths = _ref.paths,
        viewed = _ref.viewed,
        setCurrent = _ref.setCurrent;
    return _react2.default.createElement(
        Block,
        null,
        _react2.default.createElement(
            List,
            null,
            paths.map(function (path, pathIndex) {
                var handleClick = function handleClick() {
                    setCurrent(pathIndex);
                };

                return _react2.default.createElement(
                    Path,
                    { key: 'path-' + path.name },
                    _react2.default.createElement(
                        Rune,
                        { onClick: handleClick },
                        _react2.default.createElement(
                            SplashWrap,
                            { viewed: viewed, index: pathIndex },
                            _react2.default.createElement(Splash, { src: (0, _helpers.assetPath)('/img/customizer/' + path.id + '/stripe.jpg'), alt: '' })
                        ),
                        _react2.default.createElement(
                            Header,
                            null,
                            _react2.default.createElement(
                                RuneTitle,
                                null,
                                path.name
                            ),
                            _react2.default.createElement(
                                RuneBody,
                                null,
                                path.description
                            )
                        )
                    )
                );
            })
        )
    );
};

exports.default = Listing;

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = __webpack_require__(11);

var _Path = __webpack_require__(617);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Viewer__Block'
})(['position:relative;z-index:0;']);

var List = (0, _styledComponents2.default)('ul').withConfig({
    displayName: 'Viewer__List'
})(['list-style:none;display:flex;align-items:center;justify-content:center;margin:-32px 0 0;height:64px;padding:0;width:100%;position:absolute;top:0;left:0;z-index:10;']);

var PathItem = (0, _styledComponents2.default)('li').withConfig({
    displayName: 'Viewer__PathItem'
})(['margin:0 25px;position:relative;will-change:transform;']);

var PathButton = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Viewer__PathButton'
})(['width:64px;height:64px;outline:0;border:0;padding:2px;background:linear-gradient(0deg,#72542a 0%,#bd9e5e 100%);border-radius:50%;position:relative;transition:0.2s;z-index:1;', ' &::after{content:\'\';display:block;margin:-56px;background:url(', ');width:112px;height:112px;position:absolute;top:50%;left:50%;transform:scale(0);z-index:-1;', '}'], function (props) {
    return props.isActive && '\n        width: 94px;\n        height: 94px;\n    ';
}, (0, _helpers.assetPath)('/img/global/circle.svg'), function (props) {
    return props.isActive && '\n            transition: 0.2s;\n            transform: none;\n        ';
});

var PathButtonInner = (0, _styledComponents2.default)('span').withConfig({
    displayName: 'Viewer__PathButtonInner'
})(['display:block;width:100%;height:100%;background:#000;border-radius:inherit;']);

var PathButtonIcon = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Viewer__PathButtonIcon'
})(['display:block;width:100%;height:100%;border-radius:inherit;']);

var PathButtonTitle = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Viewer__PathButtonTitle'
})(['display:block;opacity:0;visibility:hidden;width:400px;margin-top:10px;margin-left:-200px;position:absolute;top:100%;left:50%;transition:0.3s;', ''], function (props) {
    return props.isActive && '\n        opacity: 1;\n        visibility: visible;\n    ';
});

var BackButton = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Viewer__BackButton'
})(['display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;cursor:pointer;padding:0;width:34px;height:34px;max-width:100%;border:0;color:#c7b184;fill:currentColor;box-shadow:0 0 28px #000;font-family:"Beaufort for LOL",serif;font-size:16px;line-height:1;font-weight:500;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;top:10px;right:10px;z-index:20;transition:0.3s;&::before,&::after{content:\'\';display:block;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;}&::before{background:linear-gradient(0deg,#72542a 0%,#bd9e5e 100%);}&::after{margin:1px;background:#16181d;transition:inherit;}&:hover{color:#fff;text-decoration:none;box-shadow:0 0 28px #000,0 0 28px rgba(#000,0.6);&::after{background:#1a1d21;}}']);

var BackButtonIcon = (0, _styledComponents2.default)('svg').withConfig({
    displayName: 'Viewer__BackButtonIcon'
})(['margin:auto;width:24px;height:24px;']);

var Viewer = function (_React$Component) {
    _inherits(Viewer, _React$Component);

    function Viewer() {
        _classCallCheck(this, Viewer);

        return _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).apply(this, arguments));
    }

    _createClass(Viewer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                paths = _props.paths,
                current = _props.current,
                setCurrent = _props.setCurrent;


            var backToListing = function backToListing() {
                setCurrent(-1);
            };

            return _react2.default.createElement(
                Block,
                null,
                _react2.default.createElement(
                    List,
                    null,
                    paths.map(function (path, pathIndex) {
                        var handleClick = function handleClick() {
                            setCurrent(pathIndex);
                        };

                        var isActive = pathIndex === current;

                        return _react2.default.createElement(
                            PathItem,
                            { key: path.slug },
                            _react2.default.createElement(
                                PathButton,
                                { onClick: handleClick, isActive: isActive },
                                _react2.default.createElement(
                                    PathButtonInner,
                                    null,
                                    _react2.default.createElement(PathButtonIcon, { src: (0, _helpers.assetPath)('/img/customizer/' + path.id + '/thumb.jpg'), alt: '' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'u-sr-only' },
                                        path.name
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                PathButtonTitle,
                                { isActive: isActive },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'c-hero__subtitle c-title-wings is-active u-spacing-30' },
                                    _react2.default.createElement('span', { className: 'c-title-wings__wing c-title-wings__wing--left' }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'c-title-wings__title' },
                                        path.name.toUpperCase()
                                    ),
                                    _react2.default.createElement('span', { className: 'c-title-wings__wing' })
                                )
                            )
                        );
                    })
                ),
                paths.map(function (path, pathIndex) {
                    if (pathIndex !== current) {
                        return null;
                    }

                    return _react2.default.createElement(_Path2.default, { key: path.name, path: path });
                }),
                _react2.default.createElement(
                    BackButton,
                    { onClick: backToListing },
                    _react2.default.createElement(
                        BackButtonIcon,
                        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 200 200' },
                        _react2.default.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M182 36.9L161.1 16 98.5 78.6 35.9 16 15 36.9l62.6 62.6L15 162.1 35.9 183l62.6-62.6 62.6 62.6 20.9-20.9-62.6-62.6'
                        })
                    )
                )
            );
        }
    }]);

    return Viewer;
}(_react2.default.Component);

exports.default = Viewer;

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactYoutube = __webpack_require__(237);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

var PathBlock = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__PathBlock'
})(['padding:120px 60px 60px;min-height:500px;animation:', ' 0.75s ease forwards;position:relative;'], fadeIn);

var PathContent = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__PathContent'
})(['overflow:hidden;display:flex;']);

var BackdropWrapper = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__BackdropWrapper'
})(['overflow:hidden;opacity:0.4;margin:0;width:100%;height:100%;background:#000;position:absolute;left:0;bottom:0;z-index:-1;&::before{content:\'\';display:block;background:linear-gradient(90deg,#000 0%,transparent 100%);width:201px;height:100%;position:absolute;right:962px;bottom:0;top:0;z-index:1;}&::after{content:\'\';display:block;background:linear-gradient(180deg,#000 0%,transparent 100%);width:100%;height:201px;position:absolute;right:0;bottom:520px;left:0;z-index:1;}']);

var Backdrop = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Path__Backdrop'
})(['margin:0;opacity:0.35;width:1162px;height:720px;position:absolute;right:0;bottom:0;']);

var Left = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__Left'
})(['flex:1 1 auto;padding-right:60px;']);

var Right = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__Right'
})(['flex:0 0 auto;width:500px;']);

var Title = (0, _styledComponents2.default)('h2').withConfig({
    displayName: 'Path__Title'
})(['margin:0 0 30px;color:#a69f90;font-size:22px;line-height:28px;text-transform:uppercase;']);

var RuneBlock = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__RuneBlock'
})(['display:flex;margin-bottom:25px;transition:0.2s;', ''], function (props) {
    return props.isInactive && '\n        opacity: 0.4;\n    ';
});

var RuneButton = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Path__RuneButton'
})(['flex:0 0 auto;margin:-24px 1px 0 -29px;padding:0;width:108px;height:108px;background:none;border:0;outline:0;transition:0.2s;', ''], function (props) {
    return props.isInactive && '\n        transform: scale(' + 80 / 108 + ', ' + 80 / 108 + ');\n    ';
});

var RuneImg = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Path__RuneImg'
})(['display:block;margin:0;width:100%;height:100%;']);

var P = (0, _styledComponents2.default)('p').withConfig({
    displayName: 'Path__P'
})(['flex:1 1 auto;margin:0;color:#b5b4b2;font-size:17px;line-height:28px;']);

var Path = function (_React$Component) {
    _inherits(Path, _React$Component);

    function Path(props) {
        _classCallCheck(this, Path);

        var _this = _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this, props));

        var path = props.path;


        var runes = path.slots[0].runes;
        var firstRune = runes[0];

        _this.state = {
            currentRuneIndex: 0,
            videoId: path.videos[firstRune.runeId]
        };

        _this.handleStateChange = function (event) {
            if (event.data === 0) {
                _this.playNextRuneVideo(_this.state.currentRuneIndex + 1);
            }

            if (event.data === 1) {
                (0, _helpers.pushToDataLayer)({
                    eventAction: 'CarouselSection-Video',
                    eventLabel: runes[_this.state.currentRuneIndex].name
                });
            }
        };
        return _this;
    }

    _createClass(Path, [{
        key: 'playNextRuneVideo',
        value: function playNextRuneVideo(index) {
            var path = this.props.path;


            var runes = path.slots[0].runes;

            // If we're not on the last rune we're going to try playing the next one.
            if (index < runes.length) {
                var nextRune = runes[index];

                // If there's a video for the rune we're trying to play play it.
                if (path.videos[nextRune.runeId]) {
                    this.setState({
                        currentRuneIndex: index
                    });
                    // If no video then let's try playing the next rune's video.
                } else {
                    this.playNextRuneVideo(index + 1);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var path = this.props.path;


            var currentRune = path.slots[0].runes[this.state.currentRuneIndex];
            var videoId = path.videos[currentRune.runeId];

            return _react2.default.createElement(
                PathBlock,
                null,
                _react2.default.createElement(
                    BackdropWrapper,
                    null,
                    _react2.default.createElement(Backdrop, { src: (0, _helpers.assetPath)('/img/customizer/' + path.id + '/splash.jpg'), alt: '' })
                ),
                _react2.default.createElement(
                    PathContent,
                    null,
                    _react2.default.createElement(
                        Left,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'c-frame c-frame--black' },
                            _react2.default.createElement(
                                'div',
                                { className: 'c-frame__content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'o-aspect o-aspect--16x9 u-spacing-none' },
                                    _react2.default.createElement(_reactYoutube2.default, {
                                        videoId: videoId,
                                        opts: {
                                            id: 'player',
                                            playerVars: {
                                                autoplay: 1,
                                                rel: 0,
                                                controls: 0
                                            }
                                        },
                                        onReady: function onReady(event) {
                                            if (event.target.a) {
                                                event.target.a.removeAttribute('allowfullscreen');
                                            }
                                        },
                                        onStateChange: this.handleStateChange
                                    })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        Right,
                        null,
                        _react2.default.createElement(
                            Title,
                            null,
                            path.description
                        ),
                        path.slots[0].runes.map(function (rune, runeIndex) {
                            var isInactive = _this2.state.currentRuneIndex !== runeIndex;

                            var handleClick = function handleClick() {
                                _this2.setState({
                                    currentRuneIndex: runeIndex
                                }, function () {
                                    var event = {
                                        eventAction: 'CarouselSection-Video',
                                        eventLabel: rune.name
                                    };

                                    (0, _helpers.pushToDataLayer)(event);
                                });
                            };

                            var runeVideoId = path.videos[rune.runeId];

                            return _react2.default.createElement(
                                RuneBlock,
                                { key: rune.name, isInactive: isInactive },
                                _react2.default.createElement(
                                    RuneButton,
                                    { onClick: runeVideoId && handleClick, isInactive: isInactive },
                                    _react2.default.createElement(RuneImg, { src: (0, _helpers.assetPath)('/img/runeBuilder/runes/108x108/' + rune.runeId + '.png'), alt: '' })
                                ),
                                _react2.default.createElement(
                                    P,
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        rune.name
                                    ),
                                    ' - ',
                                    _react2.default.createElement('span', {
                                        dangerouslySetInnerHTML: {
                                            __html: rune.shortDescription
                                        }
                                    })
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Path;
}(_react2.default.Component);

exports.default = Path;

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Path = __webpack_require__(679);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

var Block = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Mobile__Block'
})(['padding:', '% ', '% 0;border:solid;border-width:2px 0;border-color:#ab8f57 transparent #6c5021;animation:', ' 0.75s ease forwards;position:relative;&::before,&::after{content:\'\';display:block;width:2px;height:100%;position:absolute;top:0;bottom:0;background:linear-gradient(0deg,#6c5021 0%,#ab8f57 100%);}&::before{left:0;}&::after{right:0;}'], 18 / 660 * 100, 18 / 660 * 100, fadeIn);

var Mobile = function Mobile(_ref) {
    var paths = _ref.paths,
        current = _ref.current,
        props = _objectWithoutProperties(_ref, ['paths', 'current']);

    return _react2.default.createElement(
        Block,
        null,
        paths.map(function (path, pathIndex) {
            var setCurrent = function setCurrent() {
                if (pathIndex === current) {
                    props.setCurrent(-1);
                } else {
                    props.setCurrent(pathIndex);
                }
            };

            return _react2.default.createElement(_Path2.default, {
                key: path.slug,
                path: path,
                setCurrent: setCurrent,
                active: current === pathIndex
            });
        })
    );
};

exports.default = Mobile;

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactYoutube = __webpack_require__(237);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(193).polyfill();

var fadeIn = (0, _styledComponents.keyframes)(['from{opacity:0;}to{opacity:1;}']);

var Block = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__Block'
})(['display:block;']);

var Banner = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Path__Banner'
})(['overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:10px 20px;margin-bottom:', '%;width:100%;height:70px;background #000;border:2px solid #31271e;position:relative;z-index:0;'], 18 / 620 * 100);

var BannerImg = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Path__BannerImg'
})(['width:100%;position:absolute;left:0;top:50%;transform:translateY(-50%);z-index:-1;']);

var BannerTitle = (0, _styledComponents2.default)('h3').withConfig({
    displayName: 'Path__BannerTitle'
})(['margin:0;font-size:14px;text-transform:uppercase;']);

var Content = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__Content'
})(['padding:', '%;animation:', ' 0.75s ease forwards;'], 20 / 620 * 100, fadeIn);

var Title = (0, _styledComponents2.default)('h2').withConfig({
    displayName: 'Path__Title'
})(['margin:0 0 30px;color:#a69f90;font-size:22px;line-height:28px;text-transform:uppercase;']);

var RuneBlock = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__RuneBlock'
})(['display:flex;margin-bottom:25px;']);

var RuneButton = (0, _styledComponents2.default)('button').withConfig({
    displayName: 'Path__RuneButton'
})(['flex:0 0 auto;margin:-10px 15px 0 0;padding:0;width:80px;height:80px;background:none;border:0;outline:0;']);

var RuneImg = (0, _styledComponents2.default)('img').withConfig({
    displayName: 'Path__RuneImg'
})(['display:block;margin:0;width:100%;height:100%;']);

var ToggleIcon = (0, _styledComponents2.default)('div').withConfig({
    displayName: 'Path__ToggleIcon'
})(['margin:0 0 0 auto;width:30px;height:30px;background:url(\'', '/img/customizer/toggle-arrow.png\');background-size:contain;border-radius:50%;box-shadow:0 0 12px rgba(0,0,0,0.68);', ''], window.versionedAssetPath, function (props) {
    return props.isActive && '\n        transform: rotate(180deg);\n    ';
});

var P = (0, _styledComponents2.default)('p').withConfig({
    displayName: 'Path__P'
})(['flex:1 1 auto;margin:0;color:#b5b4b2;font-size:14px;line-height:1.5;']);

var Path = function (_React$Component) {
    _inherits(Path, _React$Component);

    function Path(props) {
        _classCallCheck(this, Path);

        var _this = _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this, props));

        var path = props.path;


        var firstRune = path.slots[0].runes[0];

        _this.state = {
            videoId: path.videos[firstRune.runeId]
        };
        return _this;
    }

    _createClass(Path, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.active !== this.props.active && this.props.active && this.node) {
                if (this.node) {
                    window.scrollTo({
                        top: this.node.getBoundingClientRect().top + window.scrollY - 20,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                path = _props.path,
                active = _props.active,
                setCurrent = _props.setCurrent;


            return _react2.default.createElement(
                Block,
                null,
                _react2.default.createElement(
                    Banner,
                    { innerRef: function innerRef(node) {
                            _this2.node = node;
                        }, onClick: setCurrent },
                    _react2.default.createElement(BannerImg, { src: (0, _helpers.assetPath)('/img/runeBuilder/assets/root-component/' + path.slug.slice(0, 1).toUpperCase() + path.slug.slice(1) + '.png'), alt: '' }),
                    _react2.default.createElement(
                        BannerTitle,
                        null,
                        path.name
                    ),
                    _react2.default.createElement(
                        ToggleIcon,
                        { isActive: active },
                        _react2.default.createElement(
                            'span',
                            { className: 'u-sr-only' },
                            window.i18n.runebuilder.toggle
                        )
                    )
                ),
                active && _react2.default.createElement(
                    Content,
                    null,
                    _react2.default.createElement(
                        Title,
                        null,
                        path.description
                    ),
                    path.slots[0].runes.map(function (rune) {
                        var handleClick = function handleClick() {
                            _this2.setState({
                                videoId: path.videos[rune.runeId]
                            }, function () {
                                var event = {
                                    eventAction: 'CarouselSection-Video',
                                    eventLabel: rune.name
                                };

                                (0, _helpers.pushToDataLayer)(event);
                            });
                        };

                        var videoId = path.videos[rune.runeId];

                        return _react2.default.createElement(
                            'div',
                            { key: rune.name },
                            videoId && _react2.default.createElement(
                                'div',
                                { className: 'c-frame u-spacing-20' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'c-frame__content' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'o-aspect o-aspect--16x9 u-spacing-none' },
                                        _react2.default.createElement(_reactYoutube2.default, {
                                            videoId: videoId,
                                            opts: {
                                                playerVars: {
                                                    autoplay: 0,
                                                    rel: 0,
                                                    controls: 0
                                                }
                                            }
                                        })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                RuneBlock,
                                null,
                                _react2.default.createElement(
                                    RuneButton,
                                    { onClick: handleClick },
                                    _react2.default.createElement(RuneImg, { src: (0, _helpers.assetPath)('/img/runeBuilder/runes/108x108/' + rune.runeId + '.png'), alt: '' })
                                ),
                                _react2.default.createElement(
                                    P,
                                    null,
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        rune.name
                                    ),
                                    ' - ',
                                    _react2.default.createElement('span', {
                                        dangerouslySetInnerHTML: {
                                            __html: rune.shortDescription
                                        }
                                    })
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Path;
}(_react2.default.Component);

exports.default = Path;

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(235);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewportSwitch = function (_React$Component) {
    _inherits(ViewportSwitch, _React$Component);

    function ViewportSwitch(props) {
        _classCallCheck(this, ViewportSwitch);

        var _this = _possibleConstructorReturn(this, (ViewportSwitch.__proto__ || Object.getPrototypeOf(ViewportSwitch)).call(this, props));

        _this.state = {
            match: -1
        };
        return _this;
    }

    _createClass(ViewportSwitch, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.testMatch();

            this.handleResize = (0, _debounce2.default)(this.testMatch.bind(this), 100);

            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'testMatch',
        value: function testMatch() {
            var match = window.matchMedia(this.props.queryString).matches;

            if (match !== this.state.match) {
                this.setState({
                    match: match
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$PassComponent = _props.PassComponent,
                PassComponent = _props$PassComponent === undefined ? _react2.default.createElement('span', null) : _props$PassComponent,
                _props$FailComponent = _props.FailComponent,
                FailComponent = _props$FailComponent === undefined ? _react2.default.createElement('span', null) : _props$FailComponent;


            if (this.state.match === -1) {
                return null;
            }

            // React.Children.only let's us return the correct component without
            // wrapping it in another tag. Helps with markup specific styles
            return _react2.default.Children.only(this.state.match ? PassComponent : FailComponent);
        }
    }]);

    return ViewportSwitch;
}(_react2.default.Component);

exports.default = ViewportSwitch;

/***/ })

},[612]);
//# sourceMappingURL=customizer.js.map