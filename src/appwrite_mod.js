import {Client, Functions} from "appwrite";

const appwrite_client = new Client();
appwrite_client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65685059caa94f90698f");

const fxPoint = new Functions(appwrite_client);
export async function makeReq(data_bank){
    //alert(JSON.stringify(data_bank));
    const fx_exec = await fxPoint.createExecution('url-summary-deta',JSON.stringify(data_bank),false,"/","POST");
    return fx_exec;
}