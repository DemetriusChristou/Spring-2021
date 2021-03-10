"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var loop = function loop(cars, increment) {
                var ret = [];

                for (var i = 0; i < cars.length; i++) {

                    var car = cars[i];

                    var key = car.manufacturer + car.year + car.model;
                    ret.push(React.createElement(
                        "tr",
                        { key: key },
                        React.createElement(
                            "th",
                            null,
                            car.manufacturer
                        ),
                        React.createElement(
                            "th",
                            null,
                            car.model
                        ),
                        React.createElement(
                            "th",
                            null,
                            car.year
                        ),
                        React.createElement(
                            "th",
                            null,
                            car.stock
                        ),
                        React.createElement(
                            "th",
                            null,
                            "$",
                            car.price,
                            ".00"
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "button",
                                { id: i, type: "button", onClick: increment },
                                "Increment"
                            )
                        )
                    ));
                }

                return ret;
            };

            return React.createElement(
                "table",
                null,
                React.createElement(
                    "tbody",
                    { align: "left" },
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "manufacturer"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "model"
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "button",
                                { onClick: function onClick() {
                                        return _this2.props.sortCars();
                                    }, style: { background: "none", border: "none", fontWeight: "bolder", fontSize: "16px" } },
                                "year"
                            )
                        ),
                        React.createElement(
                            "th",
                            null,
                            "stock"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "price"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Option"
                        )
                    ),
                    loop(this.props.cars, this.props.incrementState)
                )
            );
        }
    }]);

    return Table;
}(React.Component);

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App(props) {
        _classCallCheck(this, App);

        var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this3.state = {
            sortState: [0],
            cars: [{
                "manufacturer": "Toyota",
                "model": "Rav4",
                "year": 2008,
                "stock": 3,
                "price": 8500
            }, {
                "manufacturer": "Toyota",
                "model": "Camry",
                "year": 2009,
                "stock": 2,
                "price": 6500
            }, {
                "manufacturer": "Toyota",
                "model": "Tacoma",
                "year": 2016,
                "stock": 1,
                "price": 22000
            }, {
                "manufacturer": "BMW",
                "model": "i3",
                "year": 2012,
                "stock": 5,
                "price": 12000
            }, {
                "manufacturer": "Chevy",
                "model": "Malibu",
                "year": 2015,
                "stock": 2,
                "price": 10000
            }, {
                "manufacturer": "Honda",
                "model": "Accord",
                "year": 2013,
                "stock": 1,
                "price": 9000
            }, {
                "manufacturer": "Hyundai",
                "model": "Elantra",
                "year": 2013,
                "stock": 2,
                "price": 7000
            }, {
                "manufacturer": "Chevy",
                "model": "Cruze",
                "year": 2012,
                "stock": 2,
                "price": 5500
            }, {
                "manufacturer": "Dodge",
                "model": "Charger",
                "year": 2013,
                "stock": 2,
                "price": 16000
            }, {
                "manufacturer": "Ford",
                "model": "Mustang",
                "year": 2009,
                "stock": 1,
                "price": 8000
            }]
        };
        _this3.incrementState = _this3.incrementState.bind(_this3);
        _this3.sortCarsByYear = _this3.sortCarsByYear.bind(_this3);
        return _this3;
    }

    //helper function


    _createClass(App, [{
        key: "incrementState",
        value: function incrementState(e) {
            var car = this.state.cars[e.target.id];
            console.log("running increment State on car " + car);
            //copy current state
            var newCars = this.state.cars.slice();
            //find the index with matching car
            var match = function match(x) {
                return x.model === car.model;
            };
            var index = this.state.cars.findIndex(match);
            if (index != -1) {
                //if car is found
                newCars[index].stock++; //increment stock
                this.setState({ cars: newCars });
            } else {
                console.log("car " + car + " not found!");
            }
        }
    }, {
        key: "sortCarsByYear",
        value: function sortCarsByYear() {
            var temp = this.state.cars.slice();
            var temp2 = this.state.cars.slice();
            if (this.state.sortState == 0) {
                console.log("state was 0 now 1");
                //sort cars in accending order
                temp.sort(function (a, b) {
                    return a.year.valueOf() < b.year.valueOf() ? 1 : -1;
                });

                this.state.sortState = 1;
            } else if (this.state.sortState == 1) {
                console.log("state was 1 now 0");

                //sort cars in decending order
                temp.sort(function (a, b) {
                    return a.year.valueOf() > b.year.valueOf() ? 1 : -1;
                });

                this.state.sortState = 0;
            }

            this.setState({ cars: temp });
        }

        //

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Table, { cars: this.state.cars, incrementState: this.incrementState, sortCars: this.sortCarsByYear })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
