import React, {Component} from 'react';
import Image from '../Image';
import TextTruncate from 'react-text-truncate';
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false,
      data: props.data,
      faveText: 'Fave It!',
    };
    // Binding 'this' keyword
    this.setFave = this.setFave.bind(this);
  }

  setFave() {
    // toggle Fave state
    this.setState((prevState) => ({
      isFave: !prevState.isFave,
      faveText: !prevState.isFave ? '❤️' : 'Fave It!',
    }));
  }

  render() {
    const {data, faveText} = this.state;
    return (
      <tr className="listing">
        <td>
          <Image src={data.thumbnail} width={data.thumbnail_width} height={data.thumbnail_height} alt={data.title} />
        </td>
        <td>
          <h2 className="text-xl font-bold">{data.title}</h2>
          <TextTruncate line={2} element="span" truncateText="…" text={data.selftext} />
        </td>
        <td>
          <button className="whitespace-nowrap bg-slate-200 border border-slate-300 p-3 min-w-[150px] rounded-6" onClick={this.setFave}>
            {faveText}
          </button>
        </td>
      </tr>
    );
  }
}

export default Listing;
