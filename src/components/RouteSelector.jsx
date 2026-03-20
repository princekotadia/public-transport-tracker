import { useState, useEffect } from 'react';
import './RouteSelector.css';

function routing({routes, setSelectedRoute}){
  return(
    <select className='dropdown' onChange={(e) => setSelectedRoute(Number(e.target.value))}>
      <option value="">Select a route</option>
      {routes.map((thng) => (
        <option key={thng.id} value={thng.id}>{thng.name}</option>
      ))}
    </select>
  )

}

export default routing;