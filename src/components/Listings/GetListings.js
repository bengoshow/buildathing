import React, {Component} from 'react';
import Listing from './Listing';
import './Listings.css';

// TODO: https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a.data[sortConfig.key] < b.data[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.data[sortConfig.key] > b.data[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({key, direction});
  };

  return {items: sortedItems, requestSort, sortConfig};
};

const ListingsTable = (props) => {
  const {items, requestSort, sortConfig} = useSortableData(props.listings);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  // const items = props.listings;
  return (
    <table className="listings" cellPadding="10" cellSpacing="10">
      <caption>Listings</caption>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => requestSort('title')} className={`whitespace-nowrap bg-slate-200 border border-slate-300 p-3 min-w-[150px] rounded-6 ${getClassNamesFor('title')}`}>
              Sort by Title
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Listing key={item.data.id} data={item.data} />
        ))}
      </tbody>
    </table>
  );
};
class GetListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      sortDir: 'asc',
    };
  }

  // https://reactjs.org/docs/faq-ajax.html
  componentDidMount() {
    fetch('https://www.reddit.com/r/SneakySasquatch.json')
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.children,
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
    const {error, isLoaded, items} = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return <ListingsTable listings={items} />;
    }
  }
}

export default GetListings;
