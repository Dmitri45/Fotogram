let list_picture = [
'adventure-9669329_1280.jpg', 'clouds-7813339_1280.jpg',
'house-9706056_1280.jpg', 'plane-8508636_1280.jpg ',
'street-5832394_1280.jpg', 'beach-9685498_1280.jpg',
'coast-9707472_1280.jpg', 'kackar-mountains-9655200_1280.jpg',
'shark-9757306_1280.jpg', 'trees-9554109_1280.jpg',
'cat-9752539_1280.jpg', 'heat-9534673_1280.jpg',
'lion-9699734_1280.jpg', 'skate-7403432_1280.jpg'];

function showImage() {
    let refList = document.getElementById('picture')
    for (let index = 0; index < list_picture.length; index++) {
        refList.innerHTML += `<img src="./foto/${list_picture[index]}" onclick='openDialog()'>`;
        
    }
}

const dialogRef = document.getElementById('my_dialog')
function openDialog(){
    dialogRef.showModal();
}
function closeDialog() {
    dialogRef.close()
}
