
exports.hello= async (req,reply) => {
    //local var
    try {
        //action 
        return{
            FunctionName :'getbooks',
            body : 'hello this is test '
        }
    } catch (error) {
        throw error
    }
}
