import { h } from 'preact';
import style from './weather.scss';
import { useState, useEffect, useRef } from 'preact/hooks';
import usaCities from '../../assets/usa.city.list.json'

//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
export default (props) => {
    const KEY = 'd4e4a060a1f951d7a177e5bdfc448049'
    const cityInput = useRef(null)
    const stateInput = useRef(null)
    const [cityState, setCityState] = useState({city: '', state: ''})
	const [cities, setCities] = useState([])
	const [cityRows, setCityRows] = useState()
	
	useEffect(async () => {
        if (cityState.city.length && cityState.state.length) {
            const newCity = usaCities.filter(city => city.state.toUpperCase() === cityState.state.toUpperCase() && city.name.toUpperCase() === cityState.city.toUpperCase())
            setCities([...cities, ...newCity])
            setCityState({city: '', state: ''})
		}
	}, [cityState])
	
	useEffect(() => {
        if (cities.length) {
            setCityRows(cities.map(city => 
				<tr>
					<td>{city.name}</td>
					<td>{city.id}</td>
					<td>{city.state}</td>
					<td>{city.coord.lat}</td>
					<td>{city.coord.lon}</td>
				</tr>
			))
		}
	}, [cities])

	function onSubmit(event) {
        event.preventDefault();
		setCityState({
            city: cityInput.current.value,
            state: stateInput.current.value
        })
	}

	function generateCitiesTable() {
		return cities.length
		? <table>
            <tr>
                <td>Name:</td>
                <td>Id:</td>
                <td>State:</td>
                <td>Latitude:</td>
                <td>Longitude:</td>
            </tr>
            {cityRows}
        </table>
		: <p>Enter a city name and state to lookupp details</p>
	}

	return (
		<div class={style.weather}>
			{generateCitiesTable()}<br/>
			<form onSubmit={onSubmit}>
                <label style={{margin: '10px'}} for="city">Enter a city name:</label>
				<input style={{margin: '10px', padding: '5px'}} type="text" id="city-input" name="city" ref={cityInput} value={cityState.city}/>
				<label style={{margin: '10px'}} for="state">Enter a state abbreviation:</label>
				<input style={{margin: '10px', padding: '5px'}} type="text" id="state-input" name="state" ref={stateInput} value={cityState.state}/>
				<input style={{margin: '10px'}} type="submit" value="fetch city details"/>
			</form>
		</div>
	)
}
