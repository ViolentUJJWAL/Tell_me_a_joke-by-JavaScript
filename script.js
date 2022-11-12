let arr=[
`What did the astronaut say when he crashed into the moon? <br><b id="sleep">"I Apollo-gise."</b>`
,
`What did the wolf say when it stubbed its toe? <br><b id="sleep">"Owwwww-ch"</b>`
,
`Why didn’t the skeleton cross the road? <br><b id="sleep">He didn't have the guts.</b>`
,
`How do you clean a chicken? <br><b id="sleep">An egg wash</b>`
,
`Why don't scientists trust atoms? <br><b id="sleep">Because they make up everything</b>`
,
`What kind of key opens a banana? <br><b id="sleep">A monkey</b>`
,
`Why did the scarecrow win an award? <br><b id="sleep">Because he was out standing in his field.</b>`
,
`Why did the baby cross the road? <br><b id="sleep">To get to the whine shop</b>`
,
`Why was the rabbit happy? <br><b id="sleep">Because somebunny loved him</b>`
,
`How do you stop a bull from charging? <br><b id="sleep">You take away it's credit card</b>`
,
`Who won the race of princesses? <br><b id="sleep">Rapunzel, by a hair</b>`
,
`What is a cat's favourite colour? <br><b id="sleep">Purrr-ple</b>`
,
`Where does a rat go when it has a toothache? <br><b id="sleep">To the rodentist.</b>`
,
`What is brown and sticky? <br><b id="sleep">A stick.</b>`
,
`What do you call a rabbit with lice? <br><b id="sleep">Bugs Bunny.</b>`
,
`What is a zombie's favourite thing to eat? <br><b id="sleep">Brain food.</b>`
,
`Why did the king go to the bathroom? <br><b id="sleep">He wanted to sit on the throne.</b>`
,
`How do they answer the phone at the paint shop? <br><b id="sleep">Yellow</b>`
,
`What is a scarecrow's favourite fruit? <br><b id="sleep">A strawberry.</b>`
,
`What did the traffic light say to the cars? <br><b id="sleep">Don't look, I'm changing</b>`
,
`What do you call a nun who sleepwalks? <br><b id="sleep">A roamin' Catholic.</b>`
,
`What do you call two monkeys that share an Amazon account? <br><b id="sleep">Primemates</b>`
,
`Why did the woman become an archaeologist? <br><b id="sleep">Because her career was in ruins.</b>`
,
`What do you call a monkey at the North Pole? <br><b id="sleep">Lost.</b>`
,
`What has four wheels and flies? <br><b id="sleep">A garbage truck</b>`
,
`What did the science book say to the maths book? <br><b id="sleep">Wow, you've got problems.</b>`
,
`What did the lunchbox say to the banana? <br><b id="sleep">You really have appeal.</b>`
,
`What kind of tree fits in your hand? <br><b id="sleep">A palm tree</b>`
,
`Would February March? <br><b id="sleep">No, but April May.</b>`
,
`Why didn't the koala bear get the job? <br><b id="sleep">They said she was over-koala-fied.</b>`
,
`What does a cloud wear? <br><b id="sleep">Thunderwear</b>`
,
`Did you hear about the kidnapping in the park? <br><b id="sleep">They woke him up.</b>`
,
`What do you call a guy lying on your doorstep? <br><b id="sleep">Matt.</b>`
,
`What do snowmen call their fancy annual dance? <br><b id="sleep">The Snowball.</b>`
,
`Why is it so windy inside an arena? <br><b id="sleep">All those fans.</b>`
,
`What do you do if you see a spaceman? <br><b id="sleep">Park your car, man.</b>`
,
`Why should you never trust a pig with a secret? <br><b id="sleep">Because it’s bound to squeal.</b>`
,
`What does a spider’s bride wear? <br><b id="sleep">A webbing dress.</b>`
,
`Where do young cows eat lunch? <br><b id="sleep">In the calf-ateria.</b>`
,
`What did the policeman say to his tummy? <br><b id="sleep">Freeze. You’re under a vest.</b>`
,
`What do birds give out on Halloween? <br><b id="sleep">Tweets.</b>`
,
`What do you call a flower that runs on electricity? <br><b id="sleep">A power plant</b>`
,
`What kind of shoes do ninjas wear? <br><b id="sleep">Sneakers</b>`
,
`Why did the teacher put on sunglasses? <br><b id="sleep">Because their students were so bright</b>`
,
`What falls in winter but never gets hurt? <br><b id="sleep">The snow</b>`
,
`What do you call a dog that can tell time? <br><b id="sleep">A watch dog</b>`
,
`Why did they stop doing tests at the zoo? <br><b id="sleep">Because it was full of cheetahs</b>`
,
`Why is a bad joke like a bad pencil? <br><b id="sleep">It has no point</b>`
,
`What room can nobody enter? <br><b id="sleep">A mushroom</b>`
,
`What is orange and sounds like a parrot? <br><b id="sleep">A carrot</b>`
]





let string =arr[Math.floor(Math.random() * (arr.length-1))]
joke.innerHTML=string
// document.body.style.background="cyan"
sleep.hidden=true
document.body.style.textAlign="center"
document.body.style.margin="20px 10px 10px 10px"
joke.style.margin="70px 10px 10px 10px"
document.body.style.fontSize="50px"
document.body.style.fontFamily="cursive"
let boldarr=Array.from(document.body.getElementsByTagName("b"))
for (i of boldarr){
	i.style.color="Yellow"
}
console.log("DONE")




const para = document.getElementById("sleep");

function myMessage() {
  para.hidden=false
  console.log("message appeared");
}
setTimeout(myMessage, 2000);