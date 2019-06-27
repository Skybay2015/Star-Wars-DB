export default class SwapiService {
    _apiUrl = 'https://swapi.co/api';

    async _getResource(type) {
        const response = await fetch(`${this._apiUrl}${type}`);
        if (!response.ok) {
            throw new Error("Connection problems")
        }
        const body = await response.json();
        return body;
    }

    async getAllPeople(page = null) {
        let url = `/people/`;
        if (page) {
            url = `/people/?page=${page}`
        }
        const response = await this._getResource(url);

        return {
            peopleData: response.results.map(this._transformPerson),
            nextPage: this._getNextPage(response.next),
        };
    }

    async getPerson(id) {
        const person = await this._getResource(`/people/${id}`);
        return this._transformPerson(person)
    }

    _transformPerson = (person) => {
        return {
            id: this._exactId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    async getAllPlanets(page = null) {
        let url = '/planets/';
        if (page) {
            url = `/planets/?page=${page}`
        }
        const response = await this._getResource(url)

        return {
            planetsData: response.results.map(this._transformPlanet),
            nextPage: this._getNextPage(response.next),
        };
    }

    async getPlanet(id) {
        const planet = await this._getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    _exactId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) =>{
        return {
            id: this._exactId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    async getAllStarships(page) {
        let url = `/starships/`;
        if (page) { 
            url = `/starships/?page=${page}`;
        }
        const response = await this._getResource(url)

        return {
            starshipsData: response.results.map(this._transformStarship),
            nextPage: this._getNextPage(response.next)
        };

    }

    async getStarship(id) {
        const starship =  await this._getResource('/starships/' + id);
        return this._transformStarship(starship)
    }

    _getNextPage = (url) => {
        if(!url) return null
        return +url.slice(-1)
    }

    _transformStarship = (starship) => {
        return {
            id: this._exactId(starship),
            costInCredits: starship.cost_in_credits,
            hyperdriveRating: starship.hyperdrive_rating,
            name: starship.name,
            model: starship.model,
            passengers: starship.passengers
        };
    }
}
