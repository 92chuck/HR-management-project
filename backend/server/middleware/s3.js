const S3 = require('aws-sdk/clients/s3');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// const region = "us-east-1";
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

async function generateUploadURL(fileName, fileType) {
  console.log('S3 Config = ', s3.config);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Expires: 40 * 60,
  };

  // s3.getSignedUrl('putObject', params, async (error, url) => {
  //     if (error) {
  //         console.log("S3 error = ", error)
  //         return error
  //     } else {
  //         console.log("S3 url = ", url)
  //         return url
  //     }
  // })
  try {
    const url = await s3.getSignedUrl('putObject', params);
    console.log('S3 url = ', url);
    return url;
  } catch (error) {
    console.log('S3 error =', error);
    throw new Error(`S3 Error`);
  }
}

module.exports = {
  generateUploadURL,
};
