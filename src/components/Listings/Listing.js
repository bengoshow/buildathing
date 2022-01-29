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
    // https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
    this.setFave = this.setFave.bind(this);
  }

  setFave() {
    // toggle Fave state
    // https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-a-react-component
    this.setState((prevState) => ({
      isFave: !prevState.isFave,
      faveText: !prevState.isFave ? '❤️' : 'Fave It!',
    }));

    // TODO: store state in localstorage
    // https://www.tutorialspoint.com/localstorage-in-reactjs
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
