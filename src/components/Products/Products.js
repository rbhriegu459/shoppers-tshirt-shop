function Products({ products, addToCart }) { 

    if (!Array.isArray(products)) {
      return <div>No products available</div>;
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Tshirt Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantities</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.tshirtName}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button>{item.lQuantity}</button>
                  <button>{item.mQuantity}</button>
                  <button>{item.sQuantity}</button>
                </td>
                <td>
                  <button onClick={() => addToCart(item)}>Add to cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Products;