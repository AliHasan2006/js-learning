const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';
const dropdownSelects = document.querySelectorAll('.dropdown select');

for (const select of dropdownSelects) {
    for (const currCode in countryList) {
         const newOption = document.createElement('option');
         newOption.value = currCode;
         newOption.innerText = currCode;
         select.append(newOption);
    }
}

 