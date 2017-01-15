const ChuckNorrisApi = {
  baseUrl: "https://api.chucknorris.io/jokes/",

  random() {
    return this.fetch("random");
  },

  category(category) {
    return this.fetch("random?category=" + category);
  },

  fetch(subUrl) {
    return window.fetch(this.baseUrl + subUrl)
      .then(response => response.text())
      .then(rawJson => JSON.parse(rawJson))
      .catch(error => Promise.reject(error));
  }
}

export default ChuckNorrisApi;
