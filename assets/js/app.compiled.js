'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activities = function (_React$Component) {
    _inherits(Activities, _React$Component);

    function Activities() {
        _classCallCheck(this, Activities);

        var _this = _possibleConstructorReturn(this, (Activities.__proto__ || Object.getPrototypeOf(Activities)).call(this));

        _this.state = {
            content: [{
                img: 'assets/img/alumni_gath.png',
                title: 'Alumni Gathering',
                text: 'Activity held to connect former and current Ristek’s members to build positive relationship among them.'
            }, {
                img: 'assets/img/internal_class.png',
                title: 'Internal Class',
                text: 'A weekly activity tends to improve Ristek\'s members\' skill and understanding of technology based on their interest group.'
            }, {
                img: 'assets/img/open_class.png',
                title: 'Open Class',
                text: 'Open Class is our way to facilitate Fasilkom UI students - especially freshmen - that are interested to learn deeper from Ristek’s SIGs'
            }, {
                img: 'assets/img/pekan_ristek.png',
                title: 'Pekan Ristek',
                text: 'An annual event conducted over a week long in order to increase IT awareness. Composed of competitions, showcase, seminar, and many more.'
            }, {
                img: 'assets/img/rsync.png',
                title: 'RSync',
                text: 'Internal activities for Ristek’s members to build collaboration and good teamwork with fellow members.'
            }, {
                img: 'assets/img/tech_talk.png',
                title: 'Tech Talk',
                text: 'A regular activity which is held by Ristek in collaboration with partner to educate people about the newest trends in technology.'
            }],
            current: 0
        };

        _this.next = _this.next.bind(_this);
        _this.prev = _this.prev.bind(_this);
        return _this;
    }

    _createClass(Activities, [{
        key: 'next',
        value: function next() {
            var nextCurrent = this.state.current + 1;

            if (this.state.current >= this.state.content.length - 1) {
                nextCurrent = 0;
            }

            this.setState(_extends({}, this.state, {
                current: nextCurrent
            }));
        }
    }, {
        key: 'prev',
        value: function prev() {
            var prevCurrent = this.state.current - 1;

            if (this.state.current <= 0) {
                prevCurrent = this.state.content.length - 1;
            }

            this.setState(_extends({}, this.state, {
                current: prevCurrent
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var currentFirst = this.state.current - 2;
            var currentSecond = this.state.current - 1;

            if (currentFirst < 0) {
                currentFirst = this.state.content.length + currentFirst;
            }

            if (currentSecond < 0) {
                currentSecond = this.state.content.length + currentSecond;
            }

            var currentFourth = this.state.current + 1;
            var currentLast = this.state.current + 2;

            if (currentFourth > this.state.content.length - 1) {
                currentFourth = currentFourth - this.state.content.length;
            }

            if (currentLast > this.state.content.length - 1) {
                currentLast = currentLast - this.state.content.length;
            }

            return React.createElement(
                'div',
                { className: 'activities' },
                React.createElement(
                    'div',
                    { className: 'text', id: 'activities-text' },
                    React.createElement(
                        'h1',
                        null,
                        '/ ACTIVITIES /'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        'Ristek Fasilkom UI held several activities to improve its',
                        React.createElement('br', null),
                        'member\'s skill and understanding of technology'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'slider', id: 'activities-slider' },
                    React.createElement('button', { className: 'prev', onClick: this.prev }),
                    React.createElement('button', { className: 'next', onClick: this.next }),
                    React.createElement(
                        'div',
                        { className: 'slider-content first show-for-large' },
                        React.createElement('img', { src: this.state.content[currentFirst].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentFirst].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentFirst].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content show-for-large' },
                        React.createElement('img', { src: this.state.content[currentSecond].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentSecond].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentSecond].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content first hide-for-large' },
                        React.createElement('img', { src: this.state.content[currentSecond].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentSecond].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentSecond].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content' },
                        React.createElement('img', { src: this.state.content[this.state.current].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[this.state.current].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[this.state.current].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content last hide-for-large' },
                        React.createElement('img', { src: this.state.content[currentFourth].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentFourth].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentFourth].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content show-for-large' },
                        React.createElement('img', { src: this.state.content[currentFourth].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentFourth].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentFourth].text
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'slider-content last show-for-large' },
                        React.createElement('img', { src: this.state.content[currentLast].img, alt: 'content-header' }),
                        React.createElement(
                            'h1',
                            null,
                            this.state.content[currentLast].title
                        ),
                        React.createElement(
                            'p',
                            null,
                            this.state.content[currentLast].text
                        )
                    )
                )
            );
        }
    }]);

    return Activities;
}(React.Component);

ReactDOM.render(React.createElement(Activities, null), document.getElementById('activities'));