import {Component, forwardRef, OnInit} from '@angular/core';
import {MediaCapture, MediaFile} from '@ionic-native/media-capture/ngx';
import {environment as env} from '../../../environments/environment';
import {AlertController, LoadingController} from '@ionic/angular';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {File} from '@ionic-native/file/ngx';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => ImageUploadComponent)}
  ]
})
export class ImageUploadComponent implements OnInit, ControlValueAccessor {

  host = env.mediaHost;
  uri: string;
  loading: any;

  propagateChange: any = () => {};

  constructor(
    private alertCtrl: AlertController,
    private mediaCapture: MediaCapture,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private file: File,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.loadingCtrl.create({message: 'Please wait...'}).then(l => this.loading = l);
  }

  async showDialog() {
    const alert = await this.alertCtrl.create({
      header: 'Change profile picture',
      buttons: [{
        text: 'Take photo',
        handler: () => {
          this.mediaCapture.captureImage()
            .then((data: Array<MediaFile>) => this.setNewProfilePic(data[0].fullPath));
        },
      }, {
        text: 'Search files',
        handler: () => {
          // TODO: Use another plugin for iOS (iOS Cordova File Picker)
          this.fileChooser.open({mime: 'video/mp4'})
            .then(uri => this.filePath.resolveNativePath(uri))
            .then(uri => this.setNewProfilePic(uri))
            .catch(err => console.error(err));
        },
      }]
    });

    await alert.present();
  }

  setNewProfilePic(uri: string) {
    this.loading.present();
    const directory = uri.substring(0, uri.lastIndexOf('/'));
    const name = uri.substring(uri.lastIndexOf('/') + 1);

    this.file.readAsArrayBuffer(directory, name)
      .then((data: ArrayBuffer) => new Promise(resolve => {
        const blob = new Blob([data], {type: 'image/jpeg'});
        const uploadData = new FormData();
        uploadData.append('media', blob, name);
        this.http.post(env.apiUrl + 'media', uploadData, {reportProgress: true, observe: 'events'}).subscribe((r: any) => {
          if (r.type === HttpEventType.Response) {
            resolve(r.body.filename);
          }
        });

      })).then((filename: string) => {
      this.uri = filename;
      this.propagateChange(this.uri);
      this.loading.dismiss();
    });
  }

  writeValue(obj: any): void {
    this.uri = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
