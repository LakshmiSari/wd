import {
    expect
} from 'chai';
import listdotPage from '../Pages/listdotPage';
import {
    Driver
} from 'selenium-webdriver/safari';
import destinationPage from '../Pages/destinationPage';
import communityPage from '../Pages/communityPage';

describe('Navigate to listdot', () => {

    it('assert title of listdot', () => {
        listdotPage.open();
        var title = browser.getTitle(); //Gets the title of webdriverio home page
        expect(title).to.equal('Local Senior Care Options | A Place for Mom') //Asserting title

    })

    it('submit the lead form in listdot', () => {
        listdotPage.location.addValue('98005');
        listdotPage.continueButton.click();
        browser.pause(3000);
        /*  browser.waitUntil( () => {
              return $('.modal-step-2-header') .getText() === 'There Are 5+ Options For You!'

          } , 3000 ) ; */
        // second lead form

        listdotPage.fullname.addValue('list test');
        listdotPage.email.addValue('lakshmi@list.com');
        listdotPage.phone.addValue('7082345678');
        listdotPage.unlockresultsButton.click();
    })
    browser.pause(5000);

    it('asserting the thankyou page', () => {
        browser.pause(5000);
        var thankyouPageTitle = browser.getTitle();
        expect(thankyouPageTitle).to.equal('Senior Assisted Living Guides: Find Senior Care A Place for Mom')
    })

 /*   it('show me my listings', () => {

     //   listdotPage.showmemylistings.click();
        listdotPage.showmemylistingsnew.click();



    })
    browser.pause(3000);
    it('Asserting the destination page', () => {
        var destinationlistPageTitle = browser.getTitle();
        expect(destinationlistPageTitle).to.equal('52 Assisted Living Facilities near Bellevue, WA| A Place For Mom');
    })

    */
  /*  it('Clicking on community card  and navigating', () => {

        destinationPage.firstCommunityCard.click();
    })


    it('asserting the community detail page title', () => {

        var communitydetailPageTitle = browser.getTitle();
        expect(communitydetailPageTitle).to.equal('Get Pricing for NC Adult Family Home at A Place for Mom');

    })

    it('validating the existance for phonenumber and review wrapper in detail screen', () => {
        // var phone = communityPage.phonenumberandreviewarea;
        //  phone.isDisplayed();

        communityPage.phonenumberandreviewarea.isDisplayed();




    })

    it('validating the existance for  community description', () => {
        communityPage.communityDescription.isDisplayed();
    })

   it('validating the existance for Pricing module ', () => {
        communityPage.pricingModule.isDisplayed();
    })

  it('validating the existance for  care provided in the community', () => {
        communityPage.communityCareProvided.isDisplayed();
    }) 

   it('validating the existance for community review card ', () => {
        communityPage.communityReviewCard.isDisplayed();
    }) */

})