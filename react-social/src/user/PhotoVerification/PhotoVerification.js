import React, { Component, useRef, useCallback, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PhotoVerification.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Dropzone from 'react-dropzone';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';


// function Basic(props) {
// 	const onDrop = useCallback((acceptedFiles) => {
// 		console.log(acceptedFiles)
// 		this.setState({selectedFile: acceptedFiles[0]})
// 	}, [])

// 	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop, maxFiles:1});
	
// 	const files = acceptedFiles.map(file => (
// 	  <li key={file.path}>
// 		{file.path} - {file.size} bytes
// 	  </li>
// 	));
  
// 	return (
// 	  <section className="container">
// 		<div class="col-md-6 col-md-offset-3 center">
// 			<div class="btn-container">
// 				<div {...getRootProps({className: 'dropzone'})}>
// 					<h1 class="imgupload"><FontAwesomeIcon icon={faFileImage}></FontAwesomeIcon></h1>
// 					<h1 class="imgupload ok"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></h1>
// 					<h1 class="imgupload stop"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></h1>
						
// 					<p id="namefile">Only pics allowed! (jpg,jpeg,png)</p>	
// 					<input {...getInputProps()} />
// 					<p>Drag 'n' drop some files here, or click to select files</p>
// 					<aside>
// 					<h4>Files</h4>
// 					<ul>{files}</ul>
// 					</aside>
// 				</div>
// 			</div>
// 		</div>
// 	  </section>
// 	);
//   }

export default  function PhotoVerification(props) {

	const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(null);
	const [pictureType, setPictureType] = useState('profile');
    const [item, setItem] = useState('');
	const [verificationResponse, setVerificationResponse] = useState('');
	

	console.log(props.currentUser)
	console.log(props.history)
	
  
   const displayPhotoItem = async () =>{



	try {
		console.log(props.currentUser.id)
        const userId = { id: props.currentUser.id }
		
		const {res} = axios.get("http://localhost:8080/user/me/requestVerification", {
            params: {
              id: props.currentUser.id
            }
          }).then(res => {
            
            console.log(res)

			if(res.data == "User Already Verified"){
			
				Alert.success("Account already Verified!");
				
				setTimeout(() => {
					
					props.history.push('/profile');
					console.log(res);
				}, 1200);
	
			}
			else{
				
				setItem(res.data);
				
			}
	

			
		
			
          })
	  } catch (error) {
	// enter your logic for when there is an error (ex. error toast)
		console.log(`error: `, error)
	  }
    
        
		
		  console.log(item);
     
      }

	 

    const  onFileChange = event => {

        

		setSelectedFile(event.target.files[0])

		console.log(event.target.files[0])
          
        };
        

 

const	onFileUpload = async () => {
		


		try {
			// Create an object of formData
		const formData = new FormData();
		
		// Update the formData object
		formData.append('id',props.currentUser.id);
		//formData.append('pictureType',this.state.pictureType);
		formData.append('file',selectedFile);
		
		// Details of the uploaded file
		console.log(selectedFile);
		
		// Request made to the backend api
		// Send formData object
		const res = await axios.post("http://localhost:8080/user/me/uploadVerifyPhoto", formData);

		//console.log(res);

		
		if(res.data == "User Is Verified"){
			
			Alert.success("Account successfully Verified!");
			
			setTimeout(() => {
				
				props.history.push('/profile');
				console.log(res);
			}, 1200);

		}
		else{
			Alert.error("Verification failed try again");
			
			
		}


		  } catch (error) {
		// enter your logic for when there is an error (ex. error toast)
				Alert.error(
					(error && error.message) ||
					'Oops! Something went wrong. Please try again!'
				);
		  }
	};

	

const renderPicture = () =>{
	return(

	<div >

		{item?
			
			
			
			<div class="image">
					<img alt={item} width="350"  src={"https://icebreakeraws.s3.amazonaws.com/Items/"+item+".jpg"}/>
				</div>
			
			:
			<div>
				
			</div>
}
	</div>
	
	)
}

 
    return (
      <div>
        

                
           
			<form name="upload" method="post" action="#" enctype="multipart/form-data" accept-charset="utf-8">
		<div class="row">
			<section className="container">
			<div class="col-md-6 col-md-offset-3 center">
				<div class="btn-container">
				<h1 class="imgupload"><FontAwesomeIcon icon={faFileImage}></FontAwesomeIcon></h1>
					<h1 class="imgupload ok"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></h1>
					<h1 class="imgupload stop"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></h1>
					
					<p id="namefile">Only pics allowed and pic must contain an human face and display item! (jpg,jpeg,png)</p>
					
					
					{item?
                  <div>
					   Display Item is {item}
                  </div>
				  
              :
              <div> 
				 <p>Click down below to select a display item to choose from before proceeding</p>
              </div>
              }
					<input type="file" class="hidefile" onChange={onFileChange} accept="image/png, image/jpeg, image/jpg"/>

				</div>
			</div>
		</section>
		{/*
			<Basic/>

			<div class="col-md-6 col-md-offset-3 center">
				<div class="btn-container">
					<h1 class="imgupload"><FontAwesomeIcon icon={faFileImage}></FontAwesomeIcon></h1>
					<h1 class="imgupload ok"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></h1>
					<h1 class="imgupload stop"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></h1>
					
					<p id="namefile">Only pics allowed! (jpg,jpeg,png)</p>	
					
					<input type="file" class="hidefile" onChange={this.onFileChange} accept="image/png, image/jpeg, image/jpg"/>
					
				</div>
			</div>
		 */}

		 
		</div>
			
		<div class="row">			
			<div class="col-md-6 col-md-offset-3 center">
				
			
				<button type="button" class="btn btn-default" id="fakebtn"   onClick={onFileUpload} >Submit! <i class="fa fa-minus-circle"></i></button>
				<input type="submit" value="Submit!" class="btn btn-primary" id="submitbtn"/>
			
				
				{ 
					/*
					
					this.state.filetype === "jpeg" || this.state.filetype === "jpg" || this.state.filetype === "png" ? (
						<button type="button" class="btn btn-default" disabled="disabled" id="fakebtn" onClick={this.onFileUpload} >Submit! <i class="fa fa-minus-circle"></i></button>
					) : (
						<input type="submit" value="Submit!" class="btn btn-primary" id="submitbtn"/>
					)
					
					*/
				}
				
			
			</div>
		</div>
	</form>


                
                <div class="col-md-6 col-md-offset-3 center"> 
                  <button onClick={displayPhotoItem}  className="btn-style-display">
                   
                    <span className="text-colour"> Display PhotoItem  </span>
                  </button>
				</div> 

				

				{renderPicture()}
				
		

		{
			/* Upload photo succesful add as well */
		}
        
    </div>
    );

}


