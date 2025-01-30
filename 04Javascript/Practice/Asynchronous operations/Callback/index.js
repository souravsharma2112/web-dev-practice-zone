function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "Alice", age: 25 };
      callback(data);
    }, 1000);
  }
  
  fetchData((data) => {
    console.log(data);
  });
  