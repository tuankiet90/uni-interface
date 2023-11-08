/* eslint-env node */

require('dotenv').config({ path: '.env.production' })
const child_process = require('child_process')
const fs = require('fs/promises')
const { promisify } = require('util')
const dataConfig = require('../graphql.data.config')
const thegraphConfig = require('../graphql.thegraph.config')

const exec = promisify(child_process.exec)

// function fetchSchema(url, outputFile) {
//   exec(`yarn --silent get-graphql-schema --h Origin=https://app.uniswap.org ${url}`)
//     .then(({ stderr, stdout }) => {
//       if (stderr) {
//         throw new Error(stderr)
//       } else {
//         fs.writeFile(outputFile, stdout)
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       console.error(`Failed to fetch schema from ${url}`)
//     })
// }


function fetchSchemaData() {
  exec(`yarn --silent  get-graphql-schema --h Origin=https://app.uniswap.org https://api.uniswap.org/v1/graphql`)
    .then(({ stderr, stdout }) => {
      fs.writeFile(`./src/graphql/data/schema.graphql`, stdout)
      if (stderr) {
        throw new Error(stderr)
      } else {
       
      }
    })
    .catch((err) => {
      console.error(err)
      console.error(`Failed to fetch schema graphql`)
    })
}

function fetchSchemaTheGraph() {
  exec(`yarn --silent  get-graphql-schema --h Origin=https://app.uniswap.org https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3`)
    .then(({ stderr, stdout }) => {
      fs.writeFile(`./src/graphql/thegraph/schema.graphql`, stdout)
      if (stderr) {
        throw new Error(stderr)
      } else {
       
      }
    })
    .catch((err) => {
      console.error(err)
      console.error(`Failed to fetch schema TheGraph`)
    })
}
fetchSchemaTheGraph()
fetchSchemaData()
// fetchSchema(process.env.THE_GRAPH_SCHEMA_ENDPOINT, thegraphConfig.schema)
// fetchSchema(process.env.REACT_APP_AWS_API_ENDPOINT, dataConfig.schema)
  