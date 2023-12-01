pm.test("Status =  200", function() {pm.response.to.have.status(200);})
pm.test("ResponseTime < 300ms", function () { pm.expect(pm.response.responseTime).to.be.below(300); });
pm.test("Check_Name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sentinel-class landing craft");
});
pm.test("cost_in_credits/length/max_atmosphering_speed/films", () => {
    var responseJson = pm.response.json();
    pm.expect(responseJson.cost_in_credits).to.eql("240000");
    pm.expect(responseJson.length).to.be.eql("38");
    pm.expect(responseJson.max_atmosphering_speed).to.be.eql("1000");
    pm.expect(responseJson.films[0]).to.be.eql("https://swapi.py4e.com/api/films/1/");
});
pm.test("Check_length and string", () => {
    var responseJson = pm.response.json();
    pm.expect(responseJson.pilots).to.be.a('array');
    pm.expect(responseJson.MGLT).to.have.lengthOf(2);
});
pm.test("Server header is cloudflare", () => {
  pm.expect(pm.response.headers.get('Server')).to.eql('cloudflare');
});
var jsonData = pm.response.json();
pm.test("Empty array", () => {
  pm.expect(jsonData.pilots).to.be.empty;
});