function well(x) {
  let good_match = x.filter((item) => item == "good").length;
  return good_match < 1
    ? "Fail!"
    : good_match < 3
    ? "Publish!"
    : "I smell a series!";
}
