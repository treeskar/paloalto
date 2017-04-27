/**
 * Created by Eyal on 27/04/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'user',
  styles : [`
      .media
      {
          /*box-shadow:0px 0px 4px -2px #000;*/
          margin: 20px 0;
          padding:30px;
      }
      .dp
      {
          border:10px solid #eee;
          transition: all 0.2s ease-in-out;
      }
      .dp:hover
      {
          border:2px solid #eee;
          transform:rotate(360deg);
          -ms-transform:rotate(360deg);
          -webkit-transform:rotate(360deg);
          /*-webkit-font-smoothing:antialiased;*/
      }
  `],
  template: `
      <div class="row">


          <div class="col-lg-5">
              <div class="media">
                  <a class="pull-left" href="#">
                      <img class="media-object dp img-circle" 
                           [src]="user.picture.thumbnail" style="width: 100px;height:100px;">
                  </a>
                  <div class="media-body">
                      <h4 class="media-heading">{{user.name.first}} {{user.name.last}} <small> India</small></h4>
                      <h5>Software Developer at <a href="http://gridle.in">Gridle.in</a></h5>
                      <hr style="margin:8px auto">

                      <span class="label label-default">HTML5/CSS3</span>
                      <span class="label label-default">jQuery</span>
                      <span class="label label-info">CakePHP</span>
                      <span class="label label-default">Android</span>
                  </div>
              </div>
          </div>
      </div>
`})
export class UserComponent {
    @Input('source')user:any;
}