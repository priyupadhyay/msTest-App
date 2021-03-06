import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

/**
 * Generated class for the TestsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testdetails',
  templateUrl: 'testdetails.html',
})
export class TestdetailsPage {
  responseTest: any = {
    "status": null,
    "error": null,
    "response": []
  };
  listingTest: [{}];
  file_url: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController, 
    private ms: MessageServiceProvider
  ) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  beginTest(tid: any) {
 
    this.navCtrl.push('InstructionsPage', { test_id: tid, test_file: this.file_url });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GroupdetailsPage');
    var tid = this.navParams.data.test_id;
    this.ms.getData("tests/" + tid).subscribe(data => {
      console.log(data);
      
      this.responseTest = data;
      this.listingTest = this.responseTest.response;
      this.file_url = this.responseTest.response[0].file_url;
    });



  }
}
