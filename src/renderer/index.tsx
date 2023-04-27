import { createRoot } from 'react-dom/client';
import App from './App';
import { Api, TestRequest } from 'main/ipc/api/types';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
window.electron.api.call<String, TestRequest>(Api.Test, {shouldResponse: 'good'}).then(res => {
  console.log(res)
})
