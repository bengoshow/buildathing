import React, {Component} from 'react';
import Listing from './Listing';
import './Listings.css';

class GetListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      sortDir: 'asc',
    };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/SneakySasquatch.json')
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result.data.children,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const {error, isLoaded, posts} = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <table className="listings" cellPadding="10" cellSpacing="10">
          <tbody>
            {posts.map((post) => (
              <Listing key={post.data.id} data={post.data} />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default GetListings;
