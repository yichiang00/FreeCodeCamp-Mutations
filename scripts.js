
function mutation(arr) {
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();

  var result = false;
  var count=0;
  for (var i = 0; i < arr[1].length; i++) {
    if(arr[0].includes(arr[1][i]))
    {
      count++;
    }
  }
  if(count===arr[1].length)
  {
    result = true;
  }
  return result;
}

mutation(["hello", "hey"]);
