import React from "react";

//create your first component
class Home extends React.Component {
	constructor() {
		super();
		this.player = React.createRef();
		this.state = {
			songs: []
		};
	}

	playFunction = () => {
		this.player.current.play();
	};

	pauseFunction = () => {
		this.player.current.pause();
	};

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(res => res.json())
			.then(s => this.setState({ songs: s }))
			.catch(error => console.log("Error!!!"));
	}

	render() {
		return (
			<div className="page">
				{this.state.songs.map(oneSong => {
					return <li key={oneSong}>{oneSong.name}</li>;
				})}
				<ul className="player">
					<button className="backButton" onClick={this.playFunction}>
						<i className="fas fa-step-backward" />
					</button>
					<button onClick={this.playFunction}>
						<i className="fas fa-play" />
					</button>
					<button className="pauseButton" onClick={this.playFunction}>
						<i className="fas fa-pause" />
					</button>
					<button
						className="forwardButton"
						onClick={this.playFunction}>
						<i className="fas fa-step-forward" />
					</button>
					<audio ref={this.player} />
				</ul>
			</div>
		);
	}
}

export default Home;
