import fs from 'fs'
import {publishSourcemap} from  '@newrelic/publish-sourcemap' 

const files = fs.readdirSync('./build/static/js');
let mainFiles = []
files.forEach(file => {
    let temp = file
    let tempName = temp.split(".")
    // console.log(tempName[0])
    if(tempName[0] === 'main'){
        mainFiles.push(file)    
    }
}) 

publishSourcemap({
  sourcemapUrl: `https://newrelic-demo.vercel.app/static/js/${mainFiles[1]}`,
  javascriptUrl: `https://newrelic-demo.vercel.app/static/js/${mainFiles[0]}`,
  applicationId: '1106601735',
  apiKey: 'NRAK-J92SAXZFQLX4HADRNNT0EG1OTQC'
}, function (err) { console.log(err || 'Sourcemap upload done')})