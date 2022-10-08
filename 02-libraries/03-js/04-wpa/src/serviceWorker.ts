const sw = new ServiceWorkerContainer();

sw.register("http://google.com.br")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
