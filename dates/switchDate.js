function switchDate(e, day) {
    if (day === "Previous") {
      let dateVals = date.split("-")
      //2011-12-01
      console.log(dateVals);
      if (dateVals[2] === "1") {
        dateVals[1] = String(parseInt(dateVals[1]) - 1);
        dateVals[2] = String(months[parseInt(dateVals[1])]);
      } else {
        dateVals[2] = String(parseInt(dateVals[2]) - 1);
      }
      dateVals = dateVals.join("-");
      setDate(dateVals);
    } else if (day === "Next") {
      let dateVals = date.split("-")
      if (dateVals[2] === "31" || (dateVals[2] === "30" && months[parseInt(dateVals[1])] === 30)) {
        dateVals[1] = String(parseInt(dateVals[1]) + 1);
        dateVals[2] = "1";
      } else {
        dateVals[2] = String(parseInt(dateVals[2]) + 1);
      }
      dateVals = dateVals.join("-");
      setDate(dateVals);
    } else {
      setDate(curDate)
    }
  }