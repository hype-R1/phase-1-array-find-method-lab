
let superbowlWin = (placeHolder) => {
  const someResult = placeHolder.find( placeHolder => placeHolder.result === "W" );
  return !!someResult ? someResult.year : undefined;
}


