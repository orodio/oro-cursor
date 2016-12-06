module.exports = function cursor (arr) {
  return Array.isArray(arr)
    ? arr
    : String(arr).split("|")
}
