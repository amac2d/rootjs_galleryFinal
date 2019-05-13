/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();

}
function makeGallery(imageArray){
	/*

		<section id="gallery">
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
			<figcaption>landscape-1.jpg</figcaption>
		</figure>
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-2.jpg);">
			<figcaption>landscape-2.jpg</figcaption>
		</figure>
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-3.jpg);">
			<figcaption>landscape-3.jpg</figcaption>
		</figure>
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-8.jpg);">
			<figcaption>landscape-8.jpg</figcaption>
		</figure>
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-9.jpg);">
			<figcaption>landscape-9.jpg</figcaption>
		</figure>
		<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-10.jpg);">
			<figcaption>landscape-10.jpg</figcaption>
		</figure>
	</section>

	 */

	//use loops and jquery dom creation to make the html structure inside the #gallery section

	for(var figNum = 0; figNum < pictures.length ; figNum++){
		var figure = $('<figure>', {'class': 'imageGallery col-xs-12 col-sm-6 col-md-4', 'style': 'background-image:url(' + pictures[figNum] + ');', 'onclick': 'displayImage()'});
		var text1 = '' + pictures[figNum];
		var textSlice = text1.slice(7, );
		var figCaption = $('<figcaption>').append(textSlice);
		$(figure).append(figCaption);
		$('#gallery').append(figure);
	}

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

}
/*
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#galleryModal">Open Modal</button>

  <div class="modal fade" id="galleryModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">landscape-10</h4>
        </div>
        <div class="modal-body">
          <img src="images/landscape-10.jpg">
        </div>
      </div>

    </div>
  </div>
 */



function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need


	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





