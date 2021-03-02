class Table extends React.Component {


    render() {
        var format = function(car) {
            return (

                    <tr key={car}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                        <th>{car.year}</th>
                        <th>{car.stock}</th>
                        <th>${car.price}.00</th>
                        <td><button type="button">Increment</button></td>
                    </tr>
            );
        }

        return(
            <table>
                <tbody align="left">
                    <tr>
                        <th>manufacturer</th>
                        <th>model</th>
                        <th>year</th>
                        <th>stock</th>
                        <th>price</th>
                        <th>Option</th>
                    </tr>
                    {this.props.cars.map(function(car){return format(car)})}
                </tbody>
            </table>

        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },

                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },

                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },

                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },

                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },

                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },

            ]
        };
    }

    //

    //
    render() {
        return (
            <div>
                <Table cars={this.state.cars}></Table>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app"));
