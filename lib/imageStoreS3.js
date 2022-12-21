const {PutObjectCommand,S3Client}=require('@aws-sdk/client-s3')

module.exports.save=async(name,data)=>{
    const params={
        Bucket:'pizza-lovers-bucket', 
        Key:`pizzas/${name}.png`,
        Body:Buffer.from(data,'base64'),
        ContentEncoding:'base64',
        ContentType:'image/png'
    }
    const client=new S3Client({region:'eu-west-2'})
    const command=new PutObjectCommand(params)
    await client.send(command)
    return `//pizza-lovers-bucket.s3.eu-west-2.amazonaws.com/${params.Key}`
}
