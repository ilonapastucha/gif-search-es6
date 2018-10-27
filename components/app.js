const GIPHY_PUB_KEY = 'qYJUoExqhocza5OQXzJpzFgXT2AxuaGW';
const GIPHY_API_URL = 'https://api.giphy.com';
const url = `${GIPHY_API_URL}/v1/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=`; 

const style = {
  margin: '0 auto',
  textAlign: 'center',
  width: '60%'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchingText: '',
      gif: {}
    };
  }

  handleSearch (searchingText) {
    this.setState({
      loading: true
    });
    
    this.getGif(searchingText, gif => this.setState({
      loading: false,
      gif,
      searchingText
    }))
  };

  getGif (searchingText, callback) {
    fetch (url + searchingText)
      .then(response => response.json())
      .then(( {data}) => {
        callback({
        url: data.fixed_width_downsampled_url,
        sourceUrl: data.url
      })
    })
  };
  
  render() {
    return (
      <div style={style}>
          <h1>search your gif!</h1>
          <p>Find gifs on <a href='http://giphy.com'>
            giphy.com</a> <br/> Press enter to download next.
          </p>
          <Search onSearch={this.handleSearch}/>
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
        />
      </div>
    );
  }
}
