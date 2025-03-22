const button = document.getElementById("button");
const Country = document.getElementById("Country");
const Report= document.getElementById("Report"); //joke
let counter = 0;

button.onclick =() =>
{
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response)
{
    button.textContent = "Next";
    Report.textContent = "";
    console.log(response.data[counter].country);
    Country.textContent=response.data[counter].country;
    setTimeout(function()
{
    Report.textContent=response.data[counter].weather_description;
},1500);
counter++;
})
.catch(function(error)
{
    console.log(error);
})
}
