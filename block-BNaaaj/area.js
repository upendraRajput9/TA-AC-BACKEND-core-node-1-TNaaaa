function sqArea(side) {
  return side * side
}
function recArea(length, width) {
  return length * width
}
function cirArea(radius) {
  return Math.PI * radius * radius
}
module.exports={
    sqArea:sqArea,
    recArea:recArea,
    cirArea:cirArea

}