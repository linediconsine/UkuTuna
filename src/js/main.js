



function updateNote(){

    if(tuneInfo.centsOffPicth.toString() != 'NaN' && tuneInfo.pitch != -1){
        document.getElementById('pitch').innerHTML = parseInt(tuneInfo.pitch) + ' Hz';
        document.getElementById('note').innerHTML = tuneInfo.note;

        if(Math.abs(tuneInfo.centsOffPicth) < 11){
            document.getElementById('note-precision').className = "OKvalue ";
        }else if(tuneInfo.centsOffPicth > 11){
            document.getElementById('note-precision').className = "tooMuch too" + tuneInfo.centsOffPicth.toString()[0];
        }else if(tuneInfo.centsOffPicth < -11){
            document.getElementById('note-precision').className = "tooLow low" + tuneInfo.centsOffPicth.toString()[1];
        }else{
            document.getElementById('note-precision').className = "justGrey";
        }

        document.getElementById('note-precision').innerHTML = tuneInfo.centsOffPicth;
    }

}


$( document ).ready(function() {
    setTimeout(function(){

        function hasGetUserMedia() {
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
        }

        if (hasGetUserMedia()) {
            // Good to go!

            toggleLiveInput();
            setTimeout(function(){
                setInterval( updateNote,80);
            },1000);



        } else {
            document.getElementById('tuner').className = 'hide';
            document.getElementById('sorrybut').className = 'show';
        }

    },1000);
});

