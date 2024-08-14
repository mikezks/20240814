import './index.css'
import { initFederation } from "@softarc/native-federation"


(async () => {
  await initFederation('./federation.manifest.json')
  await import('./bootstrap')
})()
