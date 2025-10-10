var vg_1 = "gambling_map.vg.json";

vegaEmbed("#gambling_map", vg_1)
  .then(function(result) {
    // Access the Vega view instance here if needed
  })
  .catch(console.error);

vegaEmbed("#line_chart", "gambling_expenditure_multiline.vg.json", {actions: false});


