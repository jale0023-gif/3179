var vg_1 = "gambling_map.vg.json";

vegaEmbed("#gambling_map", vg_1)
  .then(function(result) {
    // Access the Vega view instance here if needed
  })
  .catch(console.error);


vegaEmbed("#line_chart", "gambling_expenditure_multiline.vg.json", { actions: false })
  .then(function(result) {
  })
  .catch(console.error);


vegaEmbed("#global_gambling_chart", "global_gambling_revenue.vg.json", { actions: false })
  .then(function(result) {
  })
  .catch(console.error);

vegaEmbed("#age_gambling_chart", "age_vs_gambling_type.vg.json", {actions: false})
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#sankey_chart", "gambling_activity_risk.vg.json", {actions: false})
  .catch(console.error);
