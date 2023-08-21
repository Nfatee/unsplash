const section = document.getElementById("main");

document.getElementById("btn").addEventListener("click", async () => {
  //   const response = await
  let img;
  const accessKey = "_eMyUPXQFDZplgKqobdattwlfEAlgAuJgTIAwXQzgUg";
  fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(section.childNodes[0]);
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        section.childNodes[index].src = data[index].urls.small;
      }
       image.src = data[0].urls.raw;
    });
});
