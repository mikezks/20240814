import { loadRemoteModule } from '@softarc/native-federation';


(async () => {
  const addElement = () => document.getElementById('root')!.appendChild(document.createElement('div'))
  const renderMfe = (await loadRemoteModule('mfe1', './root')).default
  
  renderMfe(addElement(), 'MFE 1')
  renderMfe(addElement(), 'MFE 2')
})()