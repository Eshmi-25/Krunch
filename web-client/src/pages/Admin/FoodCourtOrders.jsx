import React from 'react'
import { useParams } from 'react-router-dom'

const FoodCourtOrders = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Food Court Orders</h1>
      <p>Showing orders for food court with ID: {id}</p>
    </div>
  );
}

export default FoodCourtOrders;
