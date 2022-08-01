
const QRCode=require('qrcode')
const generateQR=async text =>{
    try{
        console.log(await QRCode.toDataURL(text));
    }catch(err){

    }
}

generateQR("https://majorbrands.app.test.rubiconaceturtle.com/login")