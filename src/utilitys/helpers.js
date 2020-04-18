import fetch from 'node-fetch'

const helpers = {};

const getAllCountries = () => {
  return new Promise((resolve, reject) => {
   resolve(
    fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag`)
      .then(res => res.json())
   )
   reject(new Error('test error'))
  })}

helpers.getAllCountries = getAllCountries;

export {
  getAllCountries,
}

export default helpers;