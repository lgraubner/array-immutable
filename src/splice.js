module.exports = function(arr, start, deleteCount) {
  var _len = arguments.length;
  var items = Array(_len > 3 ? _len - 3 : 0);
  for (var _key = 3; _key < _len; _key++) {
    items[_key - 3] = arguments[_key];
  }
  return [].concat(arr.slice(0, start), items, arr.slice(start + deleteCount));
};
