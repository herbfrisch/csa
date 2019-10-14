const http2 = require('http2');
const fs = require('fs');
const cheerio = require('cheerio');
const client = http2.connect('https://localhost:8080', {
  ca: fs.readFileSync('../Listing1_27/localhost.cert'),
});
client.on('error', err => console.error(err));

const { HTTP2_HEADER_PATH } = http2.constants;

const req = client.request({ [HTTP2_HEADER_PATH]: '/' });

req.setEncoding('utf8');
let body = '';
req.on('data', chunk => {
  body += chunk;
});
req.on('end', () => {
  const addresses = [];
  const $ = cheerio.load(body);
  const tr = $('tr');
  tr.each((index, element) => {
    if (index === 0) return;
    addresses.push({
      id: element.children[3].children[0].data,
      firstname: element.children[5].children[0].data,
      lastname: element.children[7].children[0].data,
    });
  });

  console.log(addresses);
});
req.end();
