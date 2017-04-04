class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    const URL = 'http://pokeapi.co/api/v2/pokemon/150';
    fetch(URL)
      .then((data) => data.json())
      .then((json) => {
        this.setState(json);
    });
      
  }
  render() {
    return (
      <div>
         <h3>Pokemon: {this.state.name}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));