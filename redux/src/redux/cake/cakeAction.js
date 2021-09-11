const BUY_CAKE  = "BUY_CACK";
const buyCake=(number=1)=>{
    return {
        type:BUY_CAKE,
        payload:number,
    }
}
export default buyCake;