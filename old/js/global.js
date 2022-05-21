function validate(val) {
  if (document.form1.name.value == "") {
      alert("Please enter a valid name");
      document.form1.name.focus();
      return false;
  }
  if (document.form1.email.value == "") {
      alert("Please enter a valid Email");
      document.form1.email.focus();
      return false;
  }
  if (document.form1.country.value == "0") {
      alert("Please select your country");
      document.form1.email.focus();
      return false;
  }
  if (document.form1.phone.value == "" || isNaN(document.form1.phone.value) || document.form1.phone.value.length <= 5 || document.form1.phone.value.length >= 13) {
      alert("Please enter a valid phone number");
      document.form1.phone.focus();
      return false;
  }
  return true;
}

function countrycode(val) {
  var xmlHttpReq = false;
  if (window.XMLHttpRequest) {
      xmlHttpReq = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
      xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlHttpReq.onreadystatechange = function() {
      if (xmlHttpReq.readyState == 4) {
          $('.phonecode').html(xmlHttpReq.responseText)
      }
  }
  xmlHttpReq.open('GET', 'ajax_query.php?remarking=' + val, true);
  xmlHttpReq.send(null);
}
var country = {
  "2": "India",
  "8": "United States",
  "7": "United  Kingdom",
  "6": "United Arab Emirates",
  "173": "Singapore",
  "3": "Australia",
  "4": "Canada",
  "123": "Malaysia",
  "108": "Kuwait",
  "92": "Hong Kong",
  "77": "Germany",
  "168": "Saudi Arabia",
  "9": "Afghanistan",
  "10": "Albania",
  "11": "Algeria",
  "12": "American Samoa",
  "13": "Andorra",
  "14": "Angola",
  "15": "Anguilla",
  "16": "Antigua and Barbuda",
  "17": "Argentina",
  "18": "Armenia",
  "19": "Austria",
  "20": "Azerbaijan",
  "21": "Bahamas",
  "22": "Bahrain",
  "23": "Bangladesh",
  "24": "Barbados",
  "25": "Belarus",
  "26": "Belgium",
  "27": "Belize",
  "28": "Benin",
  "29": "Bermuda",
  "30": "Bhutan",
  "31": "Bosnia and Herzegovina",
  "32": "Botswana",
  "33": "Brazil",
  "34": "British Virgin Islands",
  "35": "Brunei",
  "36": "Bulgaria",
  "37": "Burkina Faso",
  "38": "Burundi",
  "39": "Cambodia",
  "40": "Cameroon",
  "41": "Canary Islands",
  "42": "Cape Verde",
  "43": "Cayman Islands",
  "44": "Central African",
  "45": "Chad",
  "46": "Chile",
  "47": "China",
  "48": "Colombia",
  "49": "Comoros",
  "50": "Congo",
  "51": "Cook Islands",
  "52": "Costa Rica",
  "53": "Cote Dlvoire",
  "54": "Croatia",
  "55": "Cuba",
  "56": "Cyprus",
  "57": "Czech Republic",
  "58": "Denmark",
  "59": "Dominica",
  "60": "Dominican Republic",
  "61": "East Timor",
  "62": "Ecuador",
  "63": "Egypt",
  "64": "El Salvador",
  "65": "Equatorial Guinea",
  "66": "Eritrea",
  "67": "Estonia",
  "68": "Ethiopia",
  "69": "Faeroe Islands",
  "70": "Fiji",
  "71": "Finland",
  "72": "France",
  "73": "French Guiana",
  "74": "French Polybesia",
  "75": "Gambia",
  "76": "Georgia",
  "78": "Ghana",
  "79": "Gibraltar",
  "80": "Greece",
  "81": "Greenland",
  "82": "Grenada",
  "83": "Guadeloupe",
  "84": "Guam",
  "85": "Guatemala",
  "86": "Guinea",
  "87": "Guinea-Bissau",
  "88": "Guyana",
  "89": "Haiti",
  "90": "Holland",
  "91": "Honduras",
  "93": "Hungary",
  "94": "Iceland",
  "95": "Indonesia",
  "96": "Iran",
  "97": "Iraq",
  "98": "Ireland",
  "99": "Isleof Man",
  "100": "Israel",
  "101": "Italy",
  "102": "Jamaica",
  "103": "Japan",
  "104": "Jordan",
  "105": "Kazakhstan",
  "106": "Kenya",
  "107": "Kiribati",
  "109": "Kyrgyzstan",
  "110": "Laos",
  "111": "Latvia",
  "112": "Lebanon",
  "113": "Lesotho",
  "114": "Liberia",
  "115": "Libya",
  "116": "Liechtenstein",
  "117": "Lithuania",
  "118": "Luxembourg",
  "119": "Macau",
  "120": "Macedonia",
  "121": "Madagascar",
  "122": "Malawi",
  "124": "Maldives",
  "125": "Mali",
  "126": "Malta",
  "127": "Martinique",
  "128": "Mauritius",
  "129": "Mexico",
  "130": "Moldova",
  "131": "Monaco",
  "132": "Mongolia",
  "133": "Montenegro",
  "134": "Montserrat",
  "135": "Morocco",
  "136": "Mozambique",
  "137": "Myanmar",
  "138": "Namibia",
  "139": "Nepal",
  "140": "Netherlands",
  "141": "Netherlands Antilles",
  "142": "New Caledonia",
  "143": "New Zealand",
  "144": "Nicaragua",
  "145": "Niger",
  "146": "Nigeria",
  "147": "North Korea",
  "148": "Norway",
  "149": "Oman",
  "151": "Panama",
  "152": "Papua New Guinea",
  "153": "Paraguay",
  "154": "Peru",
  "155": "Philippines",
  "156": "Poland",
  "157": "Portugal",
  "158": "Puerto Rico",
  "159": "Qatar",
  "160": "Reunion",
  "161": "Romania",
  "162": "Russia",
  "163": "Rwanda",
  "164": "Saint Kitts",
  "165": "Saint Lucia",
  "166": "San Marino",
  "167": "Sao Tome and Principe",
  "169": "Senegal",
  "170": "Serbia",
  "171": "Seychelles",
  "172": "Sierra Leone",
  "174": "Slovakia",
  "175": "Slovenia",
  "176": "Solomon Islands",
  "177": "Somalia",
  "178": "South Africa",
  "179": "South Korea",
  "180": "Spain",
  "181": "Sri Lanka",
  "182": "Sudan",
  "183": "Suriname",
  "184": "Swaziland",
  "185": "Sweden",
  "186": "Switzerland",
  "187": "Syrian Arab Republic",
  "188": "Tahiti",
  "189": "Taiwan",
  "190": "Tajikistan",
  "191": "Tanzania",
  "192": "Thailand",
  "193": "Togo",
  "194": "Trinidad and Tobago",
  "195": "Tunisia",
  "196": "Turkey",
  "197": "Turkmenistan",
  "198": "Uganda",
  "199": "Ukraine",
  "200": "Uruguay",
  "201": "Uzbekistan",
  "202": "Vanuatu",
  "203": "Vatican City State",
  "204": "Venezuela",
  "205": "Vietnam",
  "206": "Wallis and Futuna",
  "207": "Yemen",
  "208": "Yugoslavia",
  "209": "Zambia",
  "210": "Zimbabwe",
  "150": "Others"
};
for (var item in country) {
  $('<option value="' + item + '">' + country[item] + '</option>').appendTo('.country');
}

function schedule_click(Event, cat, labelGta) {

  MasterFunctionForAnalytics(Event, cat, labelGta);
}

function MasterFunctionForAnalytics(FirstVal, secondVal, thirdVal) {

  //alert(FirstVal + secondVal + thirdVal);
  gtag('event', FirstVal, {
      'event_category': secondVal,
      'event_action': 'Click',
      'event_label': thirdVal
  });
}
/*********************************/
function schedule_click(Event, cat, labelGta) {

  MasterFunctionForAnalytics(Event, cat, labelGta);
}

function MasterFunctionForAnalytics(FirstVal, secondVal, thirdVal) {

  //alert(FirstVal + secondVal + thirdVal);
  gtag('event', FirstVal, {
      'event_category': secondVal,
      'event_action': 'Click',
      'event_label': thirdVal
  });
}