import {
    expect
} from 'chai';

import destinationPage from '../Pages/destinationPage';
import communityPage from '../Pages/communityPage';
import thankyouPage from '../Pages/thankyouPage';
import mdotPage from '../Pages/mdotPage';

describe('Navigate to mdotPage', () => {

    it('assert title of mdot', () => {
        mdotPage.open();
        var title = browser.getTitle(); //Gets the title of apfm
        expect(title).to.equal('Local Senior Care Options | A Place for Mom'); //Asserting title

    })

   
    it('submit the lead form ', () => {

        mdotPage.citystateorpostalcode.addValue("98052");
        mdotPage.nextButton1.click();

        browser.pause(3000);
        mdotPage.email.addValue("test@mdot.com");
        mdotPage.nextButton2.click();
        
        browser.pause(3000);
        mdotPage.fullname.addValue("lakshmi");
        mdotPage.phone.addValue("7903426745");
        mdotPage.getyourresultsButton.click();


       


    })

    it('asserting to thankyou page', () => {

        browser.pause(5000);
        var thankyouPageTitle = browser.getTitle();
        expect(thankyouPageTitle).to.equal('Senior Assisted Living Guides: Find Senior Care A Place for Mom');

        thankyouPage.showmemylistings.click();


    })



    it('Asserting the destination page', () => {
        var destinationlistPageTitle = browser.getTitle();
        expect(destinationlistPageTitle).to.equal('50 Assisted Living Facilities near Redmond, WA| A Place For Mom');
    })

    it('Clicking on community card  and navigating', () => {

        destinationPage.firstCommunityCard.click();
    })

    it('Clicking on community card  and navigating', () => {

        destinationPage.firstCommunityCard.click();
    })


  /*  it('asserting the community detail page title', () => {

        var communitydetailPageTitle = browser.getTitle();
        expect(communitydetailPageTitle).to.equal('View Pricing for Peters Creek Retirement & Assisted Living');

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
