import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context ): Promise<void> {
    context.bindings.signalRMessages = [{
        "target": "newMessage",
        "arguments": [ `Hello World` ]
    }]
    console.log("success")
};

export default httpTrigger;
