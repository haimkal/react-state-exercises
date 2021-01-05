import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {

	state = {
		name: '',
		res: '',
		meal:  '',
		isDesert: false
	}


	onChangeByProp = (e, prop) => {
		this.setState({
			 [prop]: e.target.value
		});
	}

	onChangeDes =  (e) => {
		this.setState ({
			isDesert: e.target.checked
		})
	}
	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input onChange={(e) => this.onChangeByProp(e, 'name')} type="text" />
				</div>
				<div>
					Choose restaurant:
					<select onChange={(e) => this.onChangeByProp(e, 'res')}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input onChange={(e) => this.onChangeByProp(e, 'meal')} type="text" />
				</div>
				<div>
					Want a desert?
					<input onChange={this.onChangeDes} type="checkbox" />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.res}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					{this.state.isDesert && 'Additionally, our chef will make a special desert for you!'}<br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;