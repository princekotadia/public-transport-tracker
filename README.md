# Public Transport Tracker 

A simple React application to track public transport routes, stops, and arrival times.  
This project demonstrates **React state management, hooks, list rendering, and API integration**.

---

##  Features

- Fetches mock route data from a REST API (`jsonplaceholder.typicode.com/todos`)  
- Transforms data into transport routes with stops and timings  
- Maintains state for:
  - `routes` (all available routes)
  - `selectedRoute` (currently selected route)
  - `lastUpdatedTime` (time of last API fetch)
- Dropdown to select a route  
- Displays list of stops and timings for the selected route  
- Highlights the **next arriving bus/train** based on current time  
- Manual refresh button  
- Auto-refresh every 30 seconds  


