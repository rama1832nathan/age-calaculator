function calculateAge() {
    setInterval(()=>{
    let birthdate = new Date(document.getElementById('dob').value);


    let now = new Date();
    let ms = now.getTime() - birthdate.getTime();

    let ss = ms / 1000;
    let mm = ss / 60;
    let hh = mm / 60;
    let dd = hh / 24;
    let mn = dd / 30.4375;
    let yy = mn / 12;

    document.querySelector('#years').innerHTML = Math.floor(yy);
    document.querySelector('#months').innerHTML = Math.floor(mn%12);
    document.querySelector('#days').innerHTML = Math.floor(dd%30.4375);
    document.querySelector('#hours').innerHTML = Math.floor(hh%24);
    document.querySelector('#minutes').innerHTML = Math.floor(mm%60);
    document.querySelector('#seconds').innerHTML = Math.floor(ss%60);




    },1000);
}
function reset() {
    window.location.reload();
}