var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.TeachAsNewRecipe=function(ctx,recipeReference,newRecipeName,newRecipePath){recipeReference&&newRecipeName?TcHmi.Server.RecipeManagement.teachAsNewRecipe(recipeReference,null,newRecipeName,newRecipePath,(function(data){return data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TeachAsNewRecipe, Recipe "+recipeReference+" teaching failed",domain:"Function",errors:data.details?[data.details]:void 0}):(TCHMI_CONSOLE_LOG_LEVEL>=3&&TcHmi.Log.info("[Source=Function, Module=TcHmi.Functions.Beckhoff.TeachAsNewRecipe] Recipe "+recipeReference+" teached successful."),void ctx.success())})):ctx.success()}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("TeachAsNewRecipe","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.TeachAsNewRecipe);