let MyData = {
    name: "VIVEK KUMAR PANNEER SELVAM",
    age: 31,
    city: "CHENNAI",
    hobbies: ["Reading", "listening to music", "badminton"],
  };

  //for...in loop:
  
  for (let key in MyData)
  {
    if (MyData.hasOwnProperty(key)) 
    {
      let value = MyData[key];
      console.log(key, value);
    }
  }

//----------------------------------------------------------------------
  //Using a for loop

  var keys = Object.keys(MyData);

for (let i = 0; i < keys.length; i++) 
{
  var key = keys[i];
  var value = MyData[key];
  console.log(key, value);
}

//-------------------------------------------------------
//Using a for...of loop 

for (const value of Object.values(MyData)) 
{
  console.log(value);
}

//----------------------------------------------------------------
//Using forEach() ------method are used to iterate over the values of an array or array-like object.

Object.values(MyData).forEach((value) => 
{
  console.log(value);
});

