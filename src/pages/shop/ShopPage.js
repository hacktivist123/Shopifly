import React from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const {collections} = this.state;
      return (
        <div className='shop-page'>
          {
            collections.map(({id, ...PreviewCollectionProps }) => (
              <PreviewCollection key={id} {...PreviewCollectionProps } />
            ))}
          }
        </div>
      )
  }
}
export default ShopPage
