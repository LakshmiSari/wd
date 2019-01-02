/* import {
    expect
} from 'chai';
describe('apfm', function () {
    it('destnation', function () {
       // browser.url('/assisted-living/washington/bellevue');
        browser.url('https://www.aplaceformom.com');
    //    $('ul.sub-menu--cities').$('li=Houston').click();
    $('ul.menu parent_menu').$('li=Memory Care').click();

     //   browser.click('//*[@id="HomeContainer-react-component-7a5da2c5-4af4-422b-a218-0018b7c46dad"]/div/header/div[2]/ul/li[3]/a');


    /*  const communityresultslist = $('#DestinationResultsList');
         console.log(communityresultslist.$$('li')[2].$('a').getText()); */
            
    //   $('.DestinationResultsList').$$('li')[2].click();

 //$('#ff_57122').selectByVisibleText('Care Home');
  /*   });

});

*/

const expect = require('chai').expect;

describe('webdriver.io page', function() {

    it('should have the right title - the fancy generator way', function () {
         browser.url('/assisted-living/washington/bellevue');//Opens webdriver.io
       // var title = browser.getTitle();//Gets the title of webdriverio home page
      //  expect(title).to.equal('Senior Assisted Living Guides: Find Senior Care A Place for Mom');

    });

    it('get website', () => {
//const mmry = $('//*[@id="HomeContainer-react-component-7a5da2c5-4af4-422b-a218-0018b7c46dad"]/div/header/div[2]/ul/li[3]/a');
 //mmry.click();

// browser.click('//*[@id="HomeContainer-react-component-7a5da2c5-4af4-422b-a218-0018b7c46dad"]/div/header/div[2]/ul/li[3]/a');
     //  $('=Seattle').click(); 
  const one =    $('//ul[@id="DestinationResultsList"]//li[1]/a');
  one.click();
    });
      

});