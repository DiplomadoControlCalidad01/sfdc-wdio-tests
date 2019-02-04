const timeout=require('../config').timeout;

if(!String.prototype.format){
    String.prototype.format=function(){
        var args=arguments;

        return this.replace(/{(\d+)}/g,function(match,number){
            return typeof args[number]!='undefined'?args[number]:match;
        });
    };
}

module.exports={
    setValue:(selector,value)=>{
        browser.waitForVisible(selector,timeout);
        browser.pause(1000);
        browser.element(selector).setValue(value);
    }
  , getValue:(selector)=>{
        return browser.getValue(selector);
    }
  , select:(selector)=>{
        browser.waitForVisible(selector,timeout);
        return browser.element(selector);
    }
  , selects:(selector)=>{
        browser.waitForVisible(selector,timeout);
        return browser.elements(selector);
    }
  , exist:(selector)=>{
        return browser.isExisting(selector);
    }
  , text:(selector)=>{
        return browser.getText(selector);
    }
  , attribute:(selector,attribute)=>{
        return browser.getAttribute(selector,attribute).trim();
    }
  , click:(selector,delay=0)=>{
        browser.waitForVisible(selector,timeout);
        browser.pause(2000);
        browser.click(selector);
        if(delay){
            browser.pause(delay);
        }
    }
  , wait:(selector,reverse=false)=>{
        browser.waitForVisible(selector,timeout,reverse);
    }
};

