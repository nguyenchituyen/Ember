import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DialogService extends Service {
  @tracked visible = false;

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }
}
