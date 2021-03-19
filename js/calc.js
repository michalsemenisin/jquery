function calculateTotal() {
    let unit_price = {
      rohlik: 1.5,
      maslo: 36,
      vajicka_6: 22,
      gothaj: 20,
      eidam: 30
    };
    let item_price = {}
  
    item_price.rohlik = ($("#qty_rohlik").val() * unit_price.rohlik)
    $("#price_rohlik").val(item_price.rohlik);
  
    item_price.maslo = ($("#qty_maslo").val() * unit_price.maslo)
    $("#price_maslo").val(item_price.maslo);
  
    item_price.vajicka_6 = ($("#qty_vajicka_6").val() * unit_price.vajicka_6)
    $("#price_vajicka_6").val(item_price.vajicka_6);
  
    item_price.gothaj = ($("#qty_gothaj").val() * unit_price.gothaj)
    $("#price_gothaj").val(item_price.gothaj);

    item_price.eidam = ($("#qty_eidam").val() * unit_price.eidam)
    $("#price_eidam").val(item_price.eidam);
  
    let total = item_price.rohlik + item_price.maslo + item_price.vajicka_6 + item_price.gothaj + item_price.eidam;
  
    $("#total_value").text(total);
  
  }
  
  $(function() {
    $(".qty").on("change keyup", calculateTotal)
  })