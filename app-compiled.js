'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GIPHY_PUB_KEY = 'qYJUoExqhocza5OQXzJpzFgXT2AxuaGW';
var GIPHY_API_URL = 'https://api.giphy.com';
var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=';

var style = {
  margin: '0 auto',
  textAlign: 'center',
  width: '60%'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.state = {
      loading: false,
      searchingText: '',
      gif: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'handleSearch',
    value: function handleSearch(searchingText) {
      var _this2 = this;

      this.setState({
        loading: true
      });

      this.getGif(searchingText, function (gif) {
        return _this2.setState({
          loading: false,
          gif: gif,
          searchingText: searchingText
        });
      });
    }
  }, {
    key: 'getGif',
    value: function getGif(searchingText, callback) {
      fetch(url + searchingText).then(function (response) {
        return response.json();
      }).then(function (_ref) {
        var data = _ref.data;

        callback({
          url: data.fixed_width_downsampled_url,
          sourceUrl: data.url
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: style },
        React.createElement(
          'h1',
          null,
          'search your gif!'
        ),
        React.createElement(
          'p',
          null,
          'Find gifs on ',
          React.createElement(
            'a',
            { href: 'http://giphy.com' },
            'giphy.com'
          ),
          ' ',
          React.createElement('br', null),
          ' Press enter to download next.'
        ),
        React.createElement(Search, { onSearch: this.handleSearch }),
        React.createElement(Gif, {
          loading: this.state.loading,
          url: this.state.gif.url,
          sourceUrl: this.state.gif.sourceUrl
        })
      );
    }
  }]);

  return App;
}(React.Component);
