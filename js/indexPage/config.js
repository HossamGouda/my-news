const sliderFetch = async () => {
  try {
    const response = await fetch("http://127.0.0.1:4010/slider");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

sliderFetch();
console.log("hello world");
