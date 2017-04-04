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

}

ReactDOM.render(<Main />, document.getElementById('app'));