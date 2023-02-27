function convertLength() {
  var fromValue = document.getElementById("fromLength").value;
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  
  var meters;
  
  switch (fromUnit) {
    case "m":
      meters = fromValue;
      break;
    case "cm":
      meters = fromValue / 100;
      break;
    case "in":
      meters = fromValue * 0.0254;
      break;
    case "ft":
      meters = fromValue * 0.3048;
      break;
    case "mm":
      meters = fromValue /1000;
      break;
    case "mi":
      meters = fromValue*1609.34;
      break;
    case "km":
      meters = fromValue*1000;
      break;
  }
  
  var result;
  
  switch (toUnit) {
    case "m":
      result = meters;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "in":
      result = meters / 0.0254;
      break;
    case "ft":
      result = meters / 0.3048;
      break;
      case "mm":
        result = meters *1000;
        break;
      case "mi":
        result = meters / 1609.34;
        break;
      case "km":
        result = meters / 1000;
        break;
  }
  
  document.getElementById("toLength").value = result.toFixed(2);
}