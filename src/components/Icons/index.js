import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faShoppingCart,
    faSearch,
    faHeart,
    faStar,
    faTrash,
    faPlus,
    faMinus,
    faTimes,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Thêm tất cả icon cần dùng vào library
library.add(
    faUser, faShoppingCart, faSearch, faHeart, faStar,
    faTrash, faPlus, faMinus, faTimes, faBars,
);

export default FontAwesomeIcon;