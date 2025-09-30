// vega_lite_vis.js

vegaEmbed("#vis", "population_map.vg.json", { actions: false })
  .then((result) => {
    console.log("Map loaded successfully");
  })
  .catch((error) => {
    console.error("Error embedding map:", error);
  });
