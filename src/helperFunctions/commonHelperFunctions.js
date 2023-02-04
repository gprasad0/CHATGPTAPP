export const getArray = (type) =>{
    switch(type){
        case "creativity":
            return ["High","Medium","Low"]

        case "outputs":
            return [1,2,3,4,5,6]
        
            default:
                return [1,2,3]
    }
     
}