$( document ).ready(function() {
});
let text = document.getElementById("text")
let play = document.getElementById("play")
let Puse = document.getElementById("pause")
let stop = document.getElementById("stop")
let speed = document.getElementById("speed")

play.addEventListener('click',()=>{
    Tovoice(text.value)
})
pause.addEventListener('click',pauseText)

stop.addEventListener('click',stopText)
function Tovoice(txt){
    if(speechSynthesis.pause && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const voice = new SpeechSynthesisUtterance(text.value)
    voice.rate = speed.value || 1
    voice.addEventListener('end',()=>{
        text.disabled = false
    })
    text.disabled = true
    speechSynthesis.speak(voice)
}
function pauseText(){
    if(speechSynthesis.speaking)speechSynthesis.pause()
}
function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}