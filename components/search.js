const styles = {
  fontSize: '1.0em',
  width: '90%',
  maxWidth: '300px'
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      searchingText:''
    };
  }

  handleChange(event) {
    this.setState ({
    searchingText: event.target.value
    })
    if (this.state.searchingText.length > 2) {
      this.props.onSearch(this.state.searchingText)
    }
  };
      
  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText)
    }
  };
  
  
  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type something"
        style={styles}
        value={this.state.searchTerm}
      />
    );
  }
}
