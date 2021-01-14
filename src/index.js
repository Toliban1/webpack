import './styles/styles.css'


import logoWebpack from './assets/logoWebpack.png'
import Post from '@models/Post'
const post = new Post('Webpack Post Title', logoWebpack)
console.log('post: ', post.toString())


import * as $ from 'jquery'
$('pre').addClass('code').html(post.toString())


import json from './assets/jsonFile'
console.log('json: ', json)


import xml from './assets/example_xml.xml'
console.log('xml: ', xml)

import csv from './assets/example_csv.csv'
console.log('csv: ', csv)
