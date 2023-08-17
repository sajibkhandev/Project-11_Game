let playerOneInput=document.querySelector(".playerOneInput")
let playerOneButton=document.querySelector(".playerOneButton")
let print1=document.querySelector(".print1")
let heading=document.querySelector(".heading")
let give=document.querySelector(".give")
// ================
let count=5
let chance=document.querySelector(".chance")
let print2=document.querySelector(".print2")
let playerTwoInput=document.querySelector(".playerTwoInput")
let playerTwoButton=document.querySelector(".playerTwoButton")
//===============
let chance3=document.querySelector(".chance3")
let print3=document.querySelector(".print3")
let playerThreeInput=document.querySelector(".playerThreeInput")
let playerThreeButton=document.querySelector(".playerThreeButton")



playerOneButton.addEventListener("click",function(){
    
    if(!playerOneInput.value){
        print1.innerHTML="Please Enter Something"
        let utterance = new SpeechSynthesisUtterance("Please Enter Something");
        speechSynthesis.speak(utterance);

    }else{
        if(!(playerOneInput.value-12)){
            print1.innerHTML="Please Enter a Number"
            let utterance = new SpeechSynthesisUtterance("Please Enter a Number");
            speechSynthesis.speak(utterance);
        }else{
            if(playerOneInput.value<=10&& playerOneInput.value>0){
                heading.innerHTML="Player Two"
                playerOneInput.style.display="none"
                playerOneButton.style.display="none"
                print1.style.display="none"
                give.style.display="none"
                // 
                chance.style.display="block"
                print2.style.display="block"
                playerTwoInput.style.display="inline-block"
                playerTwoButton.style.display="inline-block"
                chance.innerHTML=`Chance ${count}`
                // chance
                chance.style.color="white";
                chance.style.textAlign="center";
                chance.style.paddingBottom="40px";
                chance.style.fontSize="40px";
                chance.style. fontWeight="600";
                //print2
                print2.style.color="rgb(207, 241, 18)"
                print2.style.textAlign="center"
                print2.style.fontSize= "30px";
                print2.style.fontWeight="500";
                //playerTwoInput
                playerTwoInput.style.width= "300px";
                playerTwoInput.style.lineHeight= "40px";
                playerTwoInput.style.textAlign="center";
                playerTwoInput.style.margin="auto";
                playerTwoInput.style.display= "flex";
                playerTwoInput.style.marginTop="20px";
                playerTwoInput.style.marginBottom="30px";
                playerTwoInput.style.outline= "0";
                //playerTwoButton
                playerTwoButton.style.color="white";
                playerTwoButton.style.textAlign="center";
                playerTwoButton.style.display= "flex";
                playerTwoButton.style.margin= "auto";
                playerTwoButton.style.paddingTop= "10px";
                playerTwoButton.style.paddingBottom= "10px";
                playerTwoButton.style.paddingRight= "60px";
                playerTwoButton.style.paddingLeft= "60px";
                playerTwoButton.style.background= "#7373FF";
                playerTwoButton.style.border= "0";
                playerTwoButton.style.borderRadius= "20px";
                playerTwoButton.style.color= "white";
                playerTwoButton.style.fontSize= "20px";
                playerTwoButton.style.fontWeight= "700";
                playerTwoButton.style.textTransform= "uppercase";
                let utterance = new SpeechSynthesisUtterance("Thank you");
            speechSynthesis.speak(utterance);
                

            
            
 

            }else{

                print1.innerHTML="Please Enter a Number 1 To 10"
                let utterance = new SpeechSynthesisUtterance("Please Enter a Number 1 To 10");
            speechSynthesis.speak(utterance);
            }
                
            }
        }
    }
)
playerTwoButton.addEventListener("click",function(){
    
    if(!playerTwoInput.value){
        print2.innerHTML="Please Enter Something"
        let utterance = new SpeechSynthesisUtterance("Please Enter Something");
        speechSynthesis.speak(utterance);
    }else{
        if(!(playerTwoInput.value-12)){
            print2.innerHTML="Please Enter a Number"
            let utterance = new SpeechSynthesisUtterance("Please Enter a Number");
            speechSynthesis.speak(utterance);
        }else{
            if(playerTwoInput.value<=10&&playerTwoInput.value>0){
                if(count>1){
                    count--
                    chance.innerHTML=`Chance ${count}`
                    if(playerTwoInput.value==playerOneInput.value){
                        playerTwoButton.style.display="none"
                        // heading.innerHTML="Player Two Winner"              // Two print
                        heading.innerHTML="Player Three"
                        chance3.style.display="block"
                        print3.style.display="block"
                        playerThreeInput.style.display="inline-block"
                        playerThreeButton.style.display="inline-block"
                        count=5
                        chance3.innerHTML=`Chance ${count}`
                        //
                        chance.style.display="none"
                        print2.style.display="none"
                        playerTwoInput.style.display="none"
                        playerTwoButton.style.display="none"
                        // chance3
                        chance3.style.color="white";
                        chance3.style.textAlign="center";
                        chance3.style.paddingBottom="40px";
                        chance3.style.fontSize="40px";
                        chance3.style. fontWeight="600";
                        //print3
                        print3.style.color="rgb(207, 241, 18)"
                        print3.style.textAlign="center"
                        print3.style.fontSize= "30px";
                        print3.style.fontWeight="500";
                        //playerTwoInput
                        playerThreeInput.style.width= "300px";
                        playerThreeInput.style.lineHeight= "40px";
                        playerThreeInput.style.textAlign="center";
                        playerThreeInput.style.margin="auto";
                        playerThreeInput.style.display= "flex";
                        playerThreeInput.style.marginTop="20px";
                        playerThreeInput.style.marginBottom="30px";
                        playerThreeInput.style.outline= "0";
                        //playerTwoButton
                        playerThreeButton.style.color="white";
                        playerThreeButton.style.textAlign="center";
                        playerThreeButton.style.display= "flex";
                        playerThreeButton.style.margin= "auto";
                        playerThreeButton.style.paddingTop= "10px";
                        playerThreeButton.style.paddingBottom= "10px";
                        playerThreeButton.style.paddingRight= "60px";
                        playerThreeButton.style.paddingLeft= "60px";
                        playerThreeButton.style.background= "#7373FF";
                        playerThreeButton.style.border= "0";
                        playerThreeButton.style.borderRadius= "20px";
                        playerThreeButton.style.color= "white";
                        playerThreeButton.style.fontSize= "20px";
                        playerThreeButton.style.fontWeight= "700";
                        playerThreeButton.style.textTransform= "uppercase";
                        let utterance = new SpeechSynthesisUtterance("Thank you");
                        speechSynthesis.speak(utterance);
                            
                        

                        playerThreeButton.addEventListener("click",function(){
                            
                            
                            if(!playerThreeInput.value){
                                print3.innerHTML="Please Enter SomeThing"
                                let utterance = new SpeechSynthesisUtterance("Please Enter SomeThing");
                               speechSynthesis.speak(utterance);
                            }else{
                                if(!(playerThreeInput.value-12)){
                                    print3.innerHTML="Please Enter a number"
                                    let utterance = new SpeechSynthesisUtterance("Please Enter a number");
                               speechSynthesis.speak(utterance);
                                }else{
                                    if(playerThreeInput.value<=10 && playerThreeInput.value>0){
                                        if(count>1){
                                            count--
                                        chance3.innerHTML=`Chance ${count}`
                                        if(playerOneInput.value==playerThreeInput.value){
                                            playerThreeButton.style.display="none"
                                            heading.innerHTML="Player Two And Player Three Winner"
                                            let utterance = new SpeechSynthesisUtterance("congratulations Player Two And Player Three You are winner");
                                            speechSynthesis.speak(utterance);
                                        }

                                        }else{
                                            count=0
                                            chance3.innerHTML=`Chance ${count}`
                                            playerThreeButton.style.display="none"
                                            heading.innerHTML="Player Two Winner And Player Three Lost"
                                            let utterance = new SpeechSynthesisUtterance("congratulations Player Two You are winner");
                                            speechSynthesis.speak(utterance);
                                        }
                                        

                                    }else{
                                        print3.innerHTML="Please Enter a Number 1 To 10"
                                        let utterance = new SpeechSynthesisUtterance("Please Enter a Number 1 To 10");
                               speechSynthesis.speak(utterance);
                                    }
                                    
                                    
                                }
                            }
                        })

                       }
                }else{
                    count=0
                    chance.innerHTML=`Chance ${count}`
                    playerTwoButton.style.display="none"
                    // heading.innerHTML="Player One Winner"
                    heading.innerHTML="Player Three"
                    chance3.style.display="block"
                    print3.style.display="block"
                    playerThreeInput.style.display="inline-block"
                    playerThreeButton.style.display="inline-block"
                    count=5
                    chance3.innerHTML=`Chance ${count}`
                    //
                    chance.style.display="none"
                    print2.style.display="none"
                    playerTwoInput.style.display="none"
                    playerTwoButton.style.display="none"
                    // chance3
                    chance3.style.color="white";
                    chance3.style.textAlign="center";
                    chance3.style.paddingBottom="40px";
                    chance3.style.fontSize="40px";
                    chance3.style. fontWeight="600";
                    //print3
                    print3.style.color="rgb(207, 241, 18)"
                    print3.style.textAlign="center"
                    print3.style.fontSize= "30px";
                    print3.style.fontWeight="500";
                    //playerTwoInput
                    playerThreeInput.style.width= "300px";
                    playerThreeInput.style.lineHeight= "40px";
                    playerThreeInput.style.textAlign="center";
                    playerThreeInput.style.margin="auto";
                    playerThreeInput.style.display= "flex";
                    playerThreeInput.style.marginTop="20px";
                    playerThreeInput.style.marginBottom="30px";
                    playerThreeInput.style.outline= "0";
                    //playerTwoButton
                    playerThreeButton.style.color="white";
                    playerThreeButton.style.textAlign="center";
                    playerThreeButton.style.display= "flex";
                    playerThreeButton.style.margin= "auto";
                    playerThreeButton.style.paddingTop= "10px";
                    playerThreeButton.style.paddingBottom= "10px";
                    playerThreeButton.style.paddingRight= "60px";
                    playerThreeButton.style.paddingLeft= "60px";
                    playerThreeButton.style.background= "#7373FF";
                    playerThreeButton.style.border= "0";
                    playerThreeButton.style.borderRadius= "20px";
                    playerThreeButton.style.color= "white";
                    playerThreeButton.style.fontSize= "20px";
                    playerThreeButton.style.fontWeight= "700";
                    playerThreeButton.style.textTransform= "uppercase";
                    let utterance = new SpeechSynthesisUtterance("Thank you");
                    speechSynthesis.speak(utterance);
                        

                    playerThreeButton.addEventListener("click",function(){
                        
                        
                        if(!playerThreeInput.value){
                            print3.innerHTML="Please Enter SomeThing"
                            let utterance = new SpeechSynthesisUtterance("Please Enter SomeThing");
                               speechSynthesis.speak(utterance);
                            
                        }else{
                            if(!(playerThreeInput.value-12)){
                                print3.innerHTML="Please Enter a number"
                                let utterance = new SpeechSynthesisUtterance("Please Enter a number");
                               speechSynthesis.speak(utterance);
                            }else{
                                if(playerThreeInput.value<=10 && playerThreeInput.value>0){
                                    if(count>1){
                                        count--
                                    chance3.innerHTML=`Chance ${count}`
                                    if(playerOneInput.value==playerThreeInput.value){
                                        playerThreeButton.style.display="none"
                                        heading.innerHTML="Player Two lost And Player Three Winner"
                                        let utterance = new SpeechSynthesisUtterance("congratulations Player Three You are winner");
                                            speechSynthesis.speak(utterance);
                                    }

                                    }else{
                                        count=0
                                        chance3.innerHTML=`Chance ${count}`
                                        playerThreeButton.style.display="none"
                                        heading.innerHTML="Player Two lost And Player Three Lost"
                                        let utterance = new SpeechSynthesisUtterance("unfortunately Player Two And Player Three You are lost in this game");
                                            speechSynthesis.speak(utterance);
                                    }
                                    

                                }else{
                                    print3.innerHTML="Please Enter a Number 1 To 10"
                                    let utterance = new SpeechSynthesisUtterance("Please Enter a Number 1 To 10");
                               speechSynthesis.speak(utterance);
                                }
                                
                                
                            }
                        }
                    })

                   
                }
            }else{
                print2.innerHTML="Please Enter a Numebr 1 To 10"
                let utterance = new SpeechSynthesisUtterance("Please Enter a Number 1 To 10");
                               speechSynthesis.speak(utterance);
            }
        }
    }
   

})