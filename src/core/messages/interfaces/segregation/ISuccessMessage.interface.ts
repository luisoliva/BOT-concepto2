import {HeaderMessage} from '../../../../models/HeaderMessage';

export interface ISuccessMessage {
  success(contentMessage: HeaderMessage);
}
