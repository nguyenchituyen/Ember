import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DialogController extends Controller {
  @service dialog;

  constructor() {
    console.log('=============', dialog.visible);
  }
}
