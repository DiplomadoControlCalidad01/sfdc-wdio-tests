const commons=require('../core/commons')
  , patterns=require('../core/patterns');

class Message{
    constructor(){
        commons.wait(patterns.messages.container);
    }

    result(){
        return commons.text(patterns.messages.result);
    }

    text(){
        return commons.text(patterns.messages.message);
    }

    close(){
        commons.click(patterns.messages.close);
    }
}

module.exports=Message;
