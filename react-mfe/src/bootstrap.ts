
(async () => {
  const addElement = () => document.getElementById('root')!.appendChild(document.createElement('div'))
  const renderMfe = (await import('./App')).default
  
  renderMfe(addElement(), 'MFE Standalone')
})()