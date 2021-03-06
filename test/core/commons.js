/* global browser */
const timeout=require('../config').timeout;

if(!String.prototype.format){
    String.prototype.format=function(){
        var args=arguments;

        return this.replace(/{(\d+)}/g,function(match,number){
            return typeof args[number]!='undefined'?args[number]:match;
        });
    };
}

class Commons {
    static setUrl(url){
        browser.url(url);
    }

    static getUrl(){
        return browser.getUrl();
    }

    static getTitle(){
        return browser.getTitle();
    }

    static getCookie(cookie){
        return browser.getCookie(cookie).value;
    }

    static setValue(selector,value){
        browser.waitForVisible(selector,timeout);
        browser.pause(1000);
        browser.element(selector).setValue(value);
    }

    static getValue(selector){
        return browser.getValue(selector);
    }

    static select(selector){
        browser.waitForVisible(selector,timeout);
        return browser.element(selector).value;
    }

    static selects(selector){
        browser.waitForVisible(selector,timeout);
        return browser.elements(selector).value;
    }

    static exist(selector){
        return browser.isExisting(selector);
    }

    static text(selector){
        return browser.getText(selector);
    }

    static attribute(selector,attribute){
        return browser.getAttribute(selector,attribute).trim();
    }

    static click(selector,delay=0){
        browser.waitForVisible(selector,timeout);
        browser.pause(2000);
        browser.click(selector);

        if(delay){
            browser.pause(delay);
        }
    }

    static wait(selector,reverse=false,delay=0){
        if(delay){
            browser.pause(delay);
        }

        browser.waitForVisible(selector,timeout,reverse);
    }

    static keys(sequence){
        browser.keys(sequence);
    }
}

module.exports=Commons;

