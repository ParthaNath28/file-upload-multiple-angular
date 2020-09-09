import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Initializing the empty file array 
  selectedFiles: File[] = [];

  onUpload(){
    const formData = new FormData();

    //Appending files in the form data
    for (var i = 0; i < this.selectedFiles.length; i++) { 
      console.log("The selected file names are : "+this.selectedFiles[i].name);
      formData.append("files", this.selectedFiles[i], this.selectedFiles[i].name);
    }
    
    this.http.post('http://localhost:8080/upload-file', formData)
    .subscribe(res => {
      console.log(res);
      alert('Uploaded Successfully.');
    });

    this.selectedFiles = [];
  }

  constructor(private http: HttpClient){

  }

  //The file selected event will populate the array
  onFileSelected(event){
    for (var i = 0; i < event.target.files.length; i++) {
      this.selectedFiles.push(<File>event.target.files[i]);
    }
  }



}


