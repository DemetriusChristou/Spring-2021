class Table extends React.Component {


    render() {

        var loop = function(cars, increment) {
            var ret = [];

            for(var i = 0; i < cars.length; i++) {

                var car = cars[i];

                var key = car.manufacturer + car.year + car.model;
                ret.push(
                    <tr key={key}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                        <th>{car.year}</th>
                        <th>{car.stock}</th>
                        <th>${car.price}.00</th>
                        <td><button id={i}  type="button" onClick={increment}>Increment</button></td>
                    </tr>
                )
            }

            return(
                ret
            )


        }






        return(
            <table>
                <tbody align="left">
                    <tr>
                        <th>manufacturer</th>
                        <th>model</th>
                        <td><button onClick={() => this.props.sortCars()} style={{background: "none",border: "none", fontWeight: "bolder", fontSize: "16px"}}>year</button></td>
                        <th>stock</th>
                        <th>price</th>
                        <th>Option</th>
                    </tr>

                    {loop(this.props.cars, this.props.incrementState)}


                </tbody>

            </table>



        );
    }
}

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            sortState:[0],
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
        this.incrementState = this.incrementState.bind(this);
        this.sortCarsByYear = this.sortCarsByYear.bind(this);
    }

    //helper function
    incrementState(e) {
        const car = this.state.cars[e.target.id];
        console.log("running increment State on car " + car);
        //copy current state
        const newCars = this.state.cars.slice();
        //find the index with matching car
        const match = (x) => x.model === car.model;
        const index = this.state.cars.findIndex(match);
        if(index != -1) { //if car is found
            newCars[index].stock++;//increment stock
            this.setState({cars: newCars});
        }else {
            console.log("car " + car + " not found!");
        }

    }

    sortCarsByYear() {
        const temp = this.state.cars.slice();
        const temp2= this.state.cars.slice();
        if(this.state.sortState == 0) {
            console.log("state was 0 now 1");
            //sort cars in accending order
            temp.sort((a, b) => (a.year.valueOf() < b.year.valueOf()) ? 1 : -1);

            this.state.sortState = 1;

        }else if(this.state.sortState == 1) {
            console.log("state was 1 now 0");

            //sort cars in decending order
            temp.sort((a, b) => (a.year.valueOf() > b.year.valueOf()) ? 1 : -1);

            this.state.sortState = 0;
        }

        this.setState({cars: temp});
    }

    //
    render() {
        return (
            <div>
                <Table cars={this.state.cars} incrementState={this.incrementState} sortCars={this.sortCarsByYear}></Table>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app"));
