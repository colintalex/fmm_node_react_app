## Find My Market - Web App

#### Node.js/Express using MongoDB as a backend that points to a ReactJS client-side app utilizing embedded Google Maps.

<hr/>
<p align="center" style="margin-top:15px">
  <a href="https://raw.githubusercontent.com/colintalex/fmm_node_react_app/readme/client/public/readme_images/image_1.png" target="">
    <img src="/client/public/readme_images/image_1.png" alt="drawing" width="800"/>
  </a>
</p>
<hr/>

### What It's About 
The ultimate goal of this web app to provide a one-stop shop for anyone looking for Farmers Markets in their area. Additionally, registered users can favorite a market to be saved for later reference. A zoom-to feature allows the registered user to quickly locate any favorites, while clicking on any market on the map provides a list categories that are available for purchage. All data is sourced from the USDA API and cleaned for quicker, more reliable results. 

### Why I Did It
The project was for an iOS app, so I wanted to go web for practice. I also wanted to learn ReactJS framework on the frontend while expanding my knowledge with Node.js on the backend. Given that the proof of concept was essentially built by the project team already, it made focusing on the frontend more enjoyable.

The FindMymarket model has been super enjoyable since first conceived for the school project. The concept of the application just makes sense, and it's possiblities are vast. Also, the datasets are large and the importance of efficiency is at a higher threshold.

**Perfect** for practice.

### Challenges
- GoogleMaps inside of React framework. There are a few packages out there to help which made it easier, but custom icons and rendering speed standards were a great exercise in learning something completely new.
- Request overload when maneuvering the map
- Effeciently handling favorites within React state

### Wins
- Makes ultra fast map rendering without glitching, and prioritized Z-index.
- Zoom To feature on registered user's favorites (map zooms to location)
- Implemented State and Hooks within React. (Hooks are awesome!)
- Created a generally functional UI that applies text-resizing based on viewing device.

### Future Goals
- Develop a text or calendar integrated feature to remind registered users of upcoming faavorited markets.
- Background workers for updating and maintaining market info based on USDA FMID.
- Market Portal login to further describe/add info or photos about their market. (Security challenges)

Install
```
clone directory

cd api
npm install
npm start

new tab
cd ../client
npm install
npm start
```

<p align="center">
  <a href="https://raw.githubusercontent.com/colintalex/fmm_node_react_app/readme/client/public/readme_images/image_1.png" target="_blank">
    <img src="/client/public/readme_images/image_2.png" alt="drawing" width="800"/>
  </a>
  <a href="https://raw.githubusercontent.com/colintalex/fmm_node_react_app/readme/client/public/readme_images/image_1.png" target="_blank">
    <img src="/client/public/readme_images/image_3.png" alt="drawing" width="800"/>
  </a>
</p>

