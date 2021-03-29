var photo=["mainPic.jpg","harrypotter.jpg","ronweasley.jpg","hermoine.jpg","RubeusHagrid.jpg","Draco_Mal.jfif","AlbusDumbledore.jpg","voldemort.jpg"];
var names=["Harry Potter and charecters","HARRY POTTER","RON WESLEY","HERMOINE GRANGER","RUBEUS HAGRID","DRACO MALFOY","ALBUS DUMBLEDORE","VOLDEMORT"];
var i=0;
function changePicture(){
    document.getElementById("photo1").src=photo[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
    if(i==8){
        i=0;
    }
}