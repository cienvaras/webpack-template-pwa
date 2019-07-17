import dayjs from 'dayjs';
import 'dayjs/locale/es';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

dayjs.locale('es');
const container = document.getElementById('container');
const hour = document.createElement('p');
hour.innerHTML = `Hora actual: ${dayjs().format('h:mm a')}`;
container.appendChild(hour);
