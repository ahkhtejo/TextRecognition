const Tesseract  =require('tesseract.js');



exports.ORC= async (req,reply) => {
    //local var
    try {
        //action 
        return{
            FunctionName :'getbooks',
            body : 'hello this is ORC '
        }
    } catch (error) {
        throw error
    }
}



  exports.ReadPage = async (req,reply)=>{

   // const course = new page(req.body)
   const RoImgURL =req.body.ImgURL;
   let Data;
     console.log('we get  ',RoImgURL)

  //  console.log(course)
  await  Tesseract.recognize(
        RoImgURL,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        Data=text
           console.log(text);
      })

  
    try {
        //action 
        return{
            text : Data
        }
    } catch (error) {
        throw error
    }
  }
