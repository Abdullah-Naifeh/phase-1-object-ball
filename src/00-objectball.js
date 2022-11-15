

function gameObject(){
    const obj = {
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    Number: 0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:1
                },
                "Reggie Evans":{
                    Number: 30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunks:7
                },
                "Brook Lopez":{
                    Number: 11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15
                },
                "Mason Plumlee":{
                    Number: 1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5
                },
                "Jason Terry":{
                    Number: 31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise","Purple"],
            players:{
                "Jeff Adrien":{
                    Number: 0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:1
                },
                "Bismak Biyombo":{
                    Number: 30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunks:7
                },
                "DeSagna Diop":{
                    Number: 11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15
                },
                "Ben Gordon":{
                    Number: 1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5
                },
                "Brendan Haywood":{
                    Number: 31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1
                },
        }
    }
}
return obj;
}

console.log(gameObject())

function homeTeamName(){
    let object = gameObject()
    return object['home']['teamName']
}
console.log(homeTeamName())

let x = 99;
let y = 42;
debugger;
console.log("x:", x);

let oo = { foo:42, bar:83, baz:79};
for(let key in oo){
    let value = oo[key]
    console.log("Key:", key, "value:", value)
}

console.log(Object.keys(oo));
console.log(Object.values(oo));
console.log(Object.entries(oo));

function numPointsScored(playersName){
return playersName.Number;
}

console.log(numPointsScored(gameObject()['home']['players']['Alan Anderson']))

function shoeSize(playersShoeSize){
    return playersShoeSize.Shoe;
}
    
console.log(shoeSize(gameObject()['home']['players']['Mason Plumlee']))

function teamColors(teamColors){
    return teamColors.colors;
}
    
console.log(teamColors(gameObject().away))

function teamNames(obj){
 const firstTeamName = obj.home.teamName
 const secondTeamName = obj.away.teamName
return [firstTeamName,secondTeamName]
}
console.log(teamNames(gameObject()))

function playerNumbers(teamName){
    let object = gameObject();
    let names = object[teamName].players;
    let namesarr = Object.values(names);
    let numbersarr =  namesarr.map(obj=>obj.Number);
   return numbersarr;
 };
  console.log(playerNumbers('home'))

function playerStats(playerName){
  let obj = gameObject()
  let HomePlayers = () => {
    for(let playerHome in obj.home){
        return playerHome , obj.home['players']
    }
  }

  let AwayPlayers = () => {
    for(let playerAway in obj.away){
        return playerAway , obj.away['players']
    }
  }
  const teamHome = HomePlayers()
  const teamAway = AwayPlayers()
  let allPlayers = {...teamHome , ...teamAway}
  let state = allPlayers[playerName];
  return state;

}
console.log(playerStats('DeSagna Diop'))

 function bigShoeRebounds(){
  let object = gameObject();
  
 let getPlayresHome = ()=> {for(let playersHome in object.home){
     return (playersHome,object.home['players'])
  }}
   
  let getPlayresAway = ()=>{ for(let playersAway in object.away){
   return (playersAway,object.away['players'])
  };}
  let players1 = getPlayresHome();
  let players2 = getPlayresAway();
  let players = {...players1, ...players2};
  let state = Object.values(players);
  let maxShoe =  Math.max(...state.map(({ Shoe }) => Shoe));
  let statearr = state.filter(obj=>{return obj.Shoe === maxShoe})
  let rebounds = statearr.map(obj=>{return obj.Rebounds}) 
  return rebounds;
 }
console.log(bigShoeRebounds())
