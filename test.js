const alert = require('./index.js')

alert();
alert({
  type: `success`,
  msg: `Ok finish!`,
  name: `DONE`
});
alert({
  type: `warning`,
  msg: `You didn't add something!`
});
alert({
  type: `info`,
  msg: `Neeraj is awesome!`
});
alert({
  type: `error`,
  msg: `Something went wrong!`
});