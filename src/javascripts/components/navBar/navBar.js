import auth from '../auth/auth';

import dinoList from '../dinoList/dinoList';
import addButton from '../addButton/addButton';
import staffList from '../staffList/staffList';
import equipList from '../equipList/equipList';

import utils from '../../helpers/utils';

import staffData from '../../helpers/data/staffData';
import dinoData from '../../helpers/data/dinoData';

const removeExcute = (e) => {
  // console.warn('excute remove event');
  const collectionId = e.target.closest('.card').id;
  // console.warn(collectionId);
  const collectionName = utils.getActive();
  // console.warn(collectionName);
  switch (collectionName) {
    case 'staff':
      // console.warn('do delete staff member by id');
      staffData.deleteStaffById(collectionId)
        .then(() => {
          $(`#${utils.getActive()}`).click();
        })
        .catch((err) => console.error('could not delete board ', err));
      break;
    case 'dinosaurs':
      dinoData.deleteDinosById(collectionId)
        .then(() => {
          $(`#${utils.getActive()}`).click();
        })
        .catch((err) => console.error('could not delete board ', err));
      break;
    default:
      // console.warn('this is just defulte');
  }
};

const editDeleteEventListeners = () => {
  // $('.editCard').click();
  $('.deleteCard').click(removeExcute);
};

const showEditDelete = () => {
  $('.editCard').removeClass('hide');
  $('.deleteCard').removeClass('hide');
};

const hideEditDelete = () => {
  $('.editCard').addClass('hide');
  $('.deleteCard').addClass('hide');
};

const navBarEventListeners = () => {
  $('.navbar-nav a').click((event) => {
    $('.navbar-nav .active').removeClass('active');
    $(event.target).addClass('active');
  });

  $('#addButton').click(addButton.addButtonEvent);

  $('#dinosaurs').click(() => {
    addButton.hideaddbutton();
    dinoList.displayDinos().then(() => {
      const user = auth.getUser();
      if (user !== null) {
        showEditDelete();
        editDeleteEventListeners();
      } else {
        hideEditDelete();
      }
    });
  });
  $('#staff').click(() => {
    addButton.hideaddbutton();
    staffList.displayStaff().then(() => {
      const user = auth.getUser();
      if (user !== null) {
        showEditDelete();
        editDeleteEventListeners();
      } else {
        hideEditDelete();
      }
    });
  });
  $('#equipment').click(() => {
    addButton.hideaddbutton();
    equipList.displayEquipCollection().then(() => {
      const user = auth.getUser();
      if (user !== null) {
        showEditDelete();
        editDeleteEventListeners();
      } else {
        hideEditDelete();
      }
    });
  });
};

export default { navBarEventListeners, showEditDelete, hideEditDelete };