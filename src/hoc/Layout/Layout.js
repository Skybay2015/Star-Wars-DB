import React, { Component } from 'react';
import Header from '../../components/header/header';
import RandomPlanet from '../../components/random-planet/random-planet'
import SwapiService from '../../services/swapi'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.swapi = new SwapiService();
        this.state = {
            randomPlanet: {},
        };
        this.timerId = null;
        this.getPlanet();
    }

    componentDidMount() {
        const s = this;
        setTimeout(function updatePlanet() {
            s.getPlanet();
            this.timerId = setTimeout(updatePlanet, 5000);
        }, 5000);
    }

    onPlanetLoaded = (randomPlanet) => {
        this.setState({ randomPlanet });
    };

    getPlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi.getPlanet(id).then(this.onPlanetLoaded);
    };

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    render() {
        const { randomPlanet } = this.state;
        return (
            <div>
                <Header />
                <main>
                    <div className='container'>
                        <RandomPlanet
                            alt={randomPlanet.name}
                            id={randomPlanet.id}
                            name={randomPlanet.name}
                            population={randomPlanet.population}
                            rotation={randomPlanet.rotationPeriod}
                            diameter={randomPlanet.diameter}
                        />
                        {this.props.children}
                        
                    </div>
                </main>
            </div>
        );
    }
}

export default Layout;
