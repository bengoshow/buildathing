import React, {Component} from 'react';
import './GetListings.css';
import TextTruncate from 'react-text-truncate'; // recommend

// get posts from online api
// it's return a json file
class GetListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
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
        <div className="m-6">
          <ol className="space-y-6">
            {posts.map((post) => (
              <li key={post.data.id} id={post.data.id}>
                <div className="grid grid-cols-2">
                  <img src={post.data.thumbnail} alt="" className="auto-cols-min" />
                  <div>
                    <h2 className="text-xl font-bold">{post.data.title}</h2>
                    <TextTruncate line={2} element="span" truncateText="…" text={post.data.selftext} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
}

export default GetListings;
