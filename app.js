var mobiles = {
    iphone: {
      iphone7: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      iphone8: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      iphone8plus: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      iphoneX: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      iphone11: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" }
    },
    xiomi: {
      redmiA2: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      redmi10: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      redmi11: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      redmi12: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      redmi13: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      redmi13C: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" }
    },
    realme: {
      realmiNote50: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      realmiC67: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      realmiC53: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      realmi9: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      realmi9i: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" }
    },
    tecno: {
      spark20: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      spark20Pro: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      spark20C: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      POVA6: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" },
      PhantomV: { RAM: "3GB", ROM: "3GB", Camera: "24px", LCD: "420px" }
    }
  };

  var brandSelect = document.getElementById("brandSelect");
  var modelSelect = document.getElementById("modelSelect");
  var specsList = document.getElementById("specsList");

  for (var brand in mobiles) {
    var option = document.createElement("option");
    option.text = brand;
    brandSelect.add(option);
  }

  function selectBrand() {
    modelSelect.innerHTML = "<option>Select Model</option>";
    specsList.innerHTML = "";

    var selectedBrand = brandSelect.value;
    if (selectedBrand !== "Select Brand") {
      var models = mobiles[selectedBrand];
      for (var model in models) {
        var option = document.createElement("option");
        option.text = model;
        modelSelect.add(option);
      }
    }
  }

  function selectModel() {
    specsList.innerHTML = ""; 

    var selectedBrand = brandSelect.value;
    var selectedModel = modelSelect.value;

    if (selectedBrand !== "Select Brand" && selectedModel !== "Select Model") {
      var specs = mobiles[selectedBrand][selectedModel];
      for (var spec in specs) {
        var listItem = document.createElement("li");
        listItem.textContent = spec + ": " + specs[spec];
        specsList.appendChild(listItem);
      }
    }
  }