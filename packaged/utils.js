function format(duration) {
  var secs,asDate = new Date(duration*1000);
  console.log(asDate.getMinutes());
  return asDate.getMinutes() + ":" + (
        ((secs = asDate.getSeconds()) < 10) ? "0" + secs : secs);
}
